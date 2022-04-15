const env = require('./.env.config.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SPACEMAP_ADMIN_API_URI: env.SPACEMAP_LOCAL_API_URI,
  },
};

module.exports = nextConfig;
