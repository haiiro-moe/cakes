import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/~cakes",
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
		],
	},
};

export default nextConfig;
