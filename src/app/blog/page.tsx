"use client";

import { Post } from "@/components/blog-page/get-posts";
import RandomQuote from "@/components/home-page/random-quote";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

async function fetcher(
	url: string,
	{
		arg,
	}: {
		arg: {
			search?: string;
			tags?: string;
			before?: string;
			after?: string;
		};
	}
): Promise<Post[]> {
	// Reconstruct the URL with query parameters
	const params = new URLSearchParams();
	if (arg.search) {
		params.append("search", arg.search);
	}
	if (arg.tags) {
		params.append("tags", arg.tags);
	}
	if (arg.before) {
		params.append("before", arg.before);
	}
	if (arg.after) {
		params.append("after", arg.after);
	}

	const fullUrl = `${url}?${params.toString()}`;
	const response = await fetch(fullUrl);
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await response.json();
	if (!data) {
		throw new Error("No data found");
	}
	console.log("data", data);

	return data;
}

export default function BlogPage() {
	const [search, setSearch] = useState("");
	const [tags, setTags] = useState("");
	const [before, setBefore] = useState("");
	const [after, setAfter] = useState("");

	const {
		data: posts,
		error,
		isLoading,
	} = useSWR(
		["/api/blog/posts", search, tags, before, after],
		([url, search, tags, before, after]) =>
			fetcher(url, { arg: { search, tags, before, after } })
	);

	return (
		<main className="flex flex-col mx-auto w-full page-transition blog page-root">
			<section className="flex flex-col border-b border-base-300 w-full blob">
				<div className="mx-auto mt-48 pb-16 container">
					<h1 className="font-serif font-extralight text-8xl">
						The <span className="text-gradient">blog</span> page.
					</h1>
					<div className="mx-3">
						<p className="mt-4 max-w-lg text-2xl">
							Lots of text with not a whole lot of thought.
							Imagine <span className="italic">that</span>{" "}
							keyboard cat gif here.
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col bg-base-100 border-b border-base-300 w-full">
				<div className="relative mx-auto mt-16 pb-16 text-left container">
					<h1 className="mb-10 font-semibold text-6xl">My posts</h1>
					{/* TODO: Filtering */}
					{isLoading && <div>loading</div>}
					{error && <div>error</div>}
					{posts &&
						posts.map((post: Post) => (
							<div key={post.slug}>{post.slug}</div>
						))}
				</div>
			</section>
			<section className="flex flex-col border-b border-base-300 w-full">
				<div className="mx-auto mt-16 pb-16 container">
					<RandomQuote />
				</div>
			</section>
		</main>
	);
}
