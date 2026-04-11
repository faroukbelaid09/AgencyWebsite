/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/AgencyWebsite', // Remove if using a custom domain at root
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;
