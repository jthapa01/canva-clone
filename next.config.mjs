/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['9owvtkqo74.ufs.sh'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery"
      },
    ],
  },
};

export default nextConfig;
