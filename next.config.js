import { SPACEMAP_LOCAL_API_URI } from './.env.config.json'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SPACEMAP_ADMIN_API_URI: SPACEMAP_LOCAL_API_URI,
  },
}

export default nextConfig
