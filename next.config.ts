import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/~cakes",
	trailingSlash: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "haiiro.moe",
			},
			{
				protocol: "https",
				hostname: "safe.haiiro.moe",
			},
			{
				protocol: "https",
				hostname: "cdn.discordapp.com",
			},
		],
	},
};

export default nextConfig;
