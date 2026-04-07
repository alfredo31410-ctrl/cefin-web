/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // El usuario ve esto en el navegador
        source: '/landings/:path*',
        // La web principal jala el contenido de aquí (quitamos el /landings extra)
        destination: 'https://cefin-landings-z9uk.vercel.app/:path*', 
      },
    ]
  },
};

export default nextConfig;