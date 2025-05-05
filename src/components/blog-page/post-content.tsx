"use client";
import useSWR from "swr";
import { Post } from "./get-posts";

function fetcher(
	url: string,
	{
		arg,
	}: {
		arg: {
			slug: string;
		};
	}
): Promise<Post[]> {
	// Reconstruct the URL with query parameters
	const params = new URLSearchParams();
	if (arg.slug) {
		params.append("slug", arg.slug);
	}

	const fullUrl = `${url}?${params.toString()}`;

	return fetch(fullUrl).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		if (response.status === 404) {
			throw new Error("No data found");
		}
		if (response.status === 500) {
			throw new Error("Server error");
		}
		return response.json();
	});
}

export default function PostContent({ slug }: { slug: string }) {
	const {
		data: response,
		error,
		isLoading,
	} = useSWR(["/api/blog/posts", slug], ([url, slug]) =>
		fetcher(url, { arg: { slug } })
	);

	if (isLoading) {
		return (
			<div className="font-serif text-5xl text-center">Loading...</div>
		);
	}

	if (error) {
		return (
			<div className="font-serif text-5xl text-center">
				There was an error fetching the post.
			</div>
		);
	}

	if (!response || response.length === 0) {
		return (
			<div className="font-serif text-5xl text-center">No data found</div>
		);
	}

	return (
		<>
			<section className="flex flex-col border-b border-base-300 w-full blob">
				<div className="mx-auto mt-48 pb-16 container">
					<h1 className="font-serif font-extralight text-8xl">
						{response && response[0] && response[0].title}
					</h1>
					<div className="mx-3">
						<p className="mt-4 max-w-lg text-2xl">
							{response && response[0] && response[0].description}
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col bg-base-100 border-b border-base-300 w-full">
				<div className="relative flex flex-col mx-auto mt-16 pb-16 text-left container">
					{/* TODO: Filtering */}
					{isLoading && (
						<div className="font-serif text-5xl text-center">
							Loading...
						</div>
					)}
					{error && (
						<div className="font-serif text-5xl text-center">
							There was an error fetching the posts.
						</div>
					)}
					{response && response[0] && (
						<div className="post-content">
							{/* TODO: Parse markdown!!! */}
							{response[0].content}
						</div>
					)}
				</div>
			</section>
		</>
	);
}
