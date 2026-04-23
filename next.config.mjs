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
      {
        source: '/quizz',
        destination: 'https://quizz-app-phi-eight.vercel.app',
      },
      {
        source: '/quizz/:path*',
        destination: 'https://quizz-app-phi-eight.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
