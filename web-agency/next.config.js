/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/AgencyWebsite" : "",
  assetPrefix: isProd ? "/AgencyWebsite/" : "",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;