import type { Post } from "@/components/blog-page/get-posts";
import PostContent from "@/components/blog-page/post-content";
import RandomQuote from "@/components/home-page/random-quote";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const slug = (await params).slug;
	const parentMeta = await parent;

	// fetch post information
	// TODO: LOCALHOST HERE. PLEASE PLEASE PLEASE DONT FORGET ABOUT THIS.
	const post = await fetch(`http://localhost:3000/api/blog/posts`)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}
			if (res.status === 404) {
				throw new Error("No data found");
			}
			if (res.status === 500) {
				throw new Error("Server error");
			}
			return res.json();
		})
		.then((posts) => {
			const post = posts.find((p: Post) => p.slug === slug);
			if (!post) {
				throw new Error("No post found");
			}
			return post;
		});

	return {
		...(parentMeta as Metadata),
		title: `~cakes - ${post.title}`,
		description: post.description,
		openGraph: {
			title: post.title,
			description: post.description,
			url: `https://haiiro.moe/~cakes/blog/${slug}`,
			images: [
				{
					url: post.image,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [
				{
					url: post.image,
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

export default async function BlogPostPage({ params }: Props) {
	const { slug } = await params;

	return (
		<main className="flex flex-col mx-auto w-full page-transition blog page-root">
			<PostContent slug={slug} />
			<section className="flex flex-col border-b border-base-300 w-full">
				<div className="mx-auto mt-16 pb-16 container">
					<RandomQuote />
				</div>
			</section>
		</main>
	);
}
