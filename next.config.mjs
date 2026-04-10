/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.88.41'],
  typescript: {
    ignoreBuildErrors: true,
  },
   images: {
    formats: ['image/avif', 'image/webp'],
    
  },
}

export default nextConfig
