"use client";

import Link from "next/link";
import { trackMetaEvent } from "@/lib/meta-pixel";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  eventParams?: Record<string, unknown>;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

function handleTrackedClick(
  eventName: string,
  eventParams?: Record<string, unknown>,
  onClick?: () => void,
) {
  trackMetaEvent(eventName, eventParams);
  onClick?.();
}

export default function TrackedLink({
  href,
  eventName,
  eventParams,
  className,
  children,
  target,
  rel,
  ariaLabel,
  onClick,
}: TrackedLinkProps) {
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link
        href={href}
        className={className}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={() => handleTrackedClick(eventName, eventParams, onClick)}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => handleTrackedClick(eventName, eventParams, onClick)}
    >
      {children}
    </a>
  );
}
