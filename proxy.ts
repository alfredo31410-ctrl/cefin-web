import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PATHS = ["/admin", "/api/admin", "/cms"];

function isProtectedPath(pathname: string) {
  return PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

function unauthorized() {
  return new NextResponse("Autenticacion requerida", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="CEFIN Admin"',
    },
  });
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;

  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return mismatch === 0;
}

export function proxy(request: NextRequest) {
  if (!isProtectedPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUser || !adminPassword) {
    if (process.env.NODE_ENV === "development") {
      return NextResponse.next();
    }

    return unauthorized();
  }

  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Basic ")) {
    return unauthorized();
  }

  const credentials = atob(authorization.slice("Basic ".length));
  const separatorIndex = credentials.indexOf(":");

  if (separatorIndex === -1) {
    return unauthorized();
  }

  const user = credentials.slice(0, separatorIndex);
  const password = credentials.slice(separatorIndex + 1);

  if (
    !timingSafeEqual(user, adminUser) ||
    !timingSafeEqual(password, adminPassword)
  ) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/cms/:path*", "/cms"],
};
