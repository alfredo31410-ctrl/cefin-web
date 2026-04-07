/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // 1. Mapea las páginas visibles
        source: '/landings/:path*',
        destination: 'https://cefin-landings-z9uk.vercel.app/landings/:path*', 
      },
      {
        // 2. Mapea los archivos estáticos (CSS y JS)
        // Esto quita los errores 404 de los chunks
        source: '/_next/static/:path*',
        destination: 'https://cefin-landings-z9uk.vercel.app/_next/static/:path*',
      },
      {
        // 3. Mapea el optimizador de imágenes de Next.js
        // Esto quita el error 400 de alfredo.png
        source: '/_next/image/:path*',
        destination: 'https://cefin-landings-z9uk.vercel.app/_next/image/:path*',
      },
    ]
  },
};

export default nextConfig;