import { Feed } from "feed";
import { metadata as rootMeta } from "@/app/layout";
import { getPosts } from "../api/blog/posts/route";

export function getFeed() {
	const posts = getPosts();

	const feed = new Feed({
		title: `haiiro/~cakes/blog`,
		description: rootMeta.description || "A confection's thoughts.",
		id: "https://haiiro.moe/~cakes/blog",
		link: "https://haiiro.moe/~cakes/blog",
		language: "en",
		updated: new Date(
			posts.posts.sort((a, b) => {
				const ad = new Date(a.date);
				const bd = new Date(b.date);
				if (ad < bd) return 1;
				return 0;
			})[0].date || "2000-01-01"
		),
		copyright: `All rights reserved ${new Date().getFullYear()}, cakes / Kex1016`,
		generator: "haiiro.moe",
		author: {
			name: "cakes (David)",
			email: "cakes@haiiro.moe",
			link: "https://haiiro.moe/~cakes",
		},
	});

	posts.posts
		.filter((p) => {
			if (!p.tags) return p;
			if (!p.tags.includes("draft")) return p;
		})
		.forEach((p) => {
			feed.addItem({
				title: p.title,
				id: `https://haiiro.moe/~cakes/blog/${p.slug}`,
				link: `https://haiiro.moe/~cakes/blog/${p.slug}`,
				description: p.description,
				content: p.content || "No content found.",
				author: [
					{
						name: "cakes (David)",
						email: "cakes@haiiro.moe",
						link: "https://haiiro.moe/~cakes",
					},
				],
				date: new Date(p.date),
				image: p.image && `https://haiiro.moe/~cakes/posts/${p.image}`,
			});
		});

	return feed;
}

export async function GET() {
	const feed = getFeed();

	const feedFile = feed.rss2();

	return new Response(feedFile, {
		headers: { "Content-Type": "application/rss+xml" },
	});
}
