/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental
    allowedDevOrigins: [''],
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
