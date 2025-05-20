import BlogPageContents from "@/components/blog-page/blog-page-contents";
import Container from "@/components/container";
import RandomQuote from "@/components/home-page/random-quote";
import { Metadata } from "next";

// TODO: Move stuff to properly separate client and server components
// export const metadata: Metadata = {
// 	title: "Blog",
// 	description: "My blog posts",
// 	openGraph: {
// 		title: "Blog",
// 		description: "My blog posts",
// 		url: "https://haiiro.moe/~cakes/blog",
// 	},
// 	twitter: {
// 		card: "summary_large_image",
// 		title: "Blog",
// 		description: "My blog posts",
// 		site: "https://haiiro.moe/~cakes/blog",
// 		images: [
// 			{
// 				url: "https://haiiro.moe/~cakes/blog/og-image.png",
// 				alt: "Blog",
// 			},
// 		],
// 	},
// };

export default function BlogPage() {
	return (
		<main className="flex flex-col mx-auto w-full page-transition blog page-root">
			<BlogPageContents />
			<Container asSection bgVariant>
				<RandomQuote />
			</Container>
		</main>
	);
}
