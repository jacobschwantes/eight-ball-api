import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {};

if (process.env.NODE_ENV === "development") {
	await setupDevPlatform();
}

export default nextConfig;
