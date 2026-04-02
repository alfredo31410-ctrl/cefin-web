/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Cuando alguien entre a cefin.mx/landings/...
        source: '/landings/:path*',
        // Tu web principal traerá el contenido de este link:
        destination: 'https://cefin-landings-z9uk.vercel.app/landings/:path*', 
      },
    ]
  },
};

export default nextConfig;