/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/landings/:path*',
        destination: 'https://cefin-landings-z9uk.vercel.app/landings/:path*',
      },
      {
        source: '/_next/image',
        destination: 'https://cefin-landings-z9uk.vercel.app/_next/image',
      },
    ];
  },
};

export default nextConfig;