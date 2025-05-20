import type { Metadata } from "next";
import {
	Roboto_Flex,
	Roboto_Mono,
	Roboto_Serif,
	Shadows_Into_Light,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import PathProvider from "@/components/path-provider";
import { ToastProvider } from "@/components/toast-provider";

const roboto = Roboto_Flex({
	subsets: ["latin"],
	variable: "--font-roboto",
	display: "swap",
	axes: [
		"GRAD",
		"opsz",
		"wdth",
		"XOPQ",
		"XTRA",
		"YOPQ",
		"YTAS",
		"YTUC",
		"YTDE",
		"YTFI",
		"YTLC",
		"YTUC",
		"slnt",
	],
});

const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	variable: "--font-roboto-mono",
	display: "swap",
	weight: "variable",
});

const robotoSerif = Roboto_Serif({
	subsets: ["latin"],
	variable: "--font-roboto-serif",
	display: "swap",
	axes: ["GRAD", "opsz", "wdth"],
});

const shadowsIntoLight = Shadows_Into_Light({
	subsets: ["latin"],
	variable: "--font-shadows-into-light",
	weight: "400",
});

export const metadata: Metadata = {
	title: "~cakes",
	openGraph: {
		title: "About",
		description: "About me",
		url: "https://haiiro.moe/~cakes/",
		images: [
			{
				url: "/~cakes/og.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "About",
		description: "About me",
		site: "https://haiiro.moe/~cakes/",
		images: [
			{
				url: "/~cakes/og.png",
				width: 1200,
				height: 630,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<PathProvider>
			<html lang="en">
				<head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/~cakes/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/~cakes/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/~cakes/favicon-16x16.png"
					/>
					<link rel="manifest" href="/~cakes/site.webmanifest" />
				</head>
				<body
					className={`${roboto.variable} ${robotoMono.variable} ${robotoSerif.variable} ${shadowsIntoLight.variable} antialiased font-sans`}
				>
					<ToastProvider>
						<div className="relative flex flex-col w-full">
							<Navbar />
							<div className="flex min-h-screen content">
								{children}
							</div>
							<Footer />
							<Background />
						</div>
					</ToastProvider>
				</body>
			</html>
		</PathProvider>
	);
}
