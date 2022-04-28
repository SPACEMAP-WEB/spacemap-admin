const envrc = require('./.env.config.json')
const env = envrc[process.env.NODE_ENV]

console.log(env)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SPACEMAP_ADMIN_API_URI: env.SPACEMAP_LOCAL_API_URI,
  },
}

module.exports = nextConfig
