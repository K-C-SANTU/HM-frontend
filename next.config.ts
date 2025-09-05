import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    images: {
        domains: ["images.unsplash.com", "cdn.example.com"],
    },
    env: {
        API_URL: isProd ? "https://api.example.com" : "http://localhost:3001",
        APP_ENV: isProd ? "production" : "development",
    },
    compiler: {
        emotion: true,
    },
};

export default nextConfig;
