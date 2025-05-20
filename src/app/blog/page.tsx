import BlogPageContents from "@/components/blog-page/blog-page-contents";
import Container from "@/components/container";
import RandomQuote from "@/components/home-page/random-quote";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "~cakes - blog",
	description: "My blog posts",
	openGraph: {
		title: "~cakes - blog",
		description: "My blog posts",
		url: "https://haiiro.moe/~cakes/blog",
	},
	twitter: {
		card: "summary_large_image",
		title: "~cakes - blog",
		description: "My blog posts",
		site: "https://haiiro.moe/~cakes/blog",
	},
};

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
