/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // 1. Rewrite para las páginas visibles
        source: '/landings/:path*',
        destination: 'https://cefin-landings-z9uk.vercel.app/landings/:path*', 
      },
      {
        // 2. NUEVO: Rewrite para los archivos internos de Next.js (JS, CSS, Chunks)
        // Esto evita los errores 404 que ves en la consola
        source: '/_next/static/:path*',
        destination: 'https://cefin-landings-z9uk.vercel.app/_next/static/:path*',
      },
    ]
  },
};

export default nextConfig;