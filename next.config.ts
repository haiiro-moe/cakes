import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
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
