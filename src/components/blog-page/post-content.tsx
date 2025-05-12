"use client";
import useSWR from "swr";
import { Post } from "./get-posts";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";

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
			<>
				<section className="flex flex-col border-b border-base-300 w-full blob">
					<div className="mx-auto mt-48 pb-16 container">
						<h1 className="font-serif font-extralight text-8xl">
							Loading post...
						</h1>
						<div className="mx-3">
							<p className="mt-4 max-w-lg text-2xl">
								Please wait while we fetch the post content.
							</p>
						</div>
					</div>
				</section>
				<section className="flex flex-col bg-base-100 border-b border-base-300 w-full">
					<div className="relative flex flex-col mx-auto mt-16 pb-16 text-left container">
						<div className="pb-52 post-content">
							There should be a post here, but unfortunately, it
							is loading. Please wait a moment.
						</div>
					</div>
				</section>
			</>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center min-h-[90vh] font-serif text-5xl">
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
						<p>
							{response &&
								response[0] &&
								new Date(response[0].date).toLocaleDateString(
									"en-US",
									{
										year: "numeric",
										month: "long",
										day: "numeric",
									}
								)}
							{response[0].tags &&
								response[0].tags.length > 0 && (
									<span className="text-gray-500 text-sm">
										{" "}
										-{" "}
										{response[0].tags
											.map((tag) => `#${tag}`)
											.join(", ")}
									</span>
								)}
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col bg-base-100 border-b border-base-300 w-full">
				<div className="relative flex flex-col mx-auto mt-16 pb-16 text-left container">
					{/* TODO: Filtering */}
					{response && response[0] && (
						<div className="post-content">
							<Markdown
								remarkPlugins={[remarkMath]}
								rehypePlugins={[rehypeKatex, rehypeRaw]}
								components={{
									p: ({ node, ...props }) => (
										<p
											className="my-4 text-md"
											{...props}
										/>
									),
									h1: ({ node, ...props }) => (
										<h1
											className="my-4 font-serif text-5xl"
											{...props}
										/>
									),
									h2: ({ node, ...props }) => (
										<h2
											className="my-4 font-serif text-4xl"
											{...props}
										/>
									),
									h3: ({ node, ...props }) => (
										<h3
											className="my-4 text-3xl"
											{...props}
										/>
									),
									h4: ({ node, ...props }) => (
										<h4
											className="my-4 text-2xl"
											{...props}
										/>
									),
									h5: ({ node, ...props }) => (
										<h5
											className="my-4 text-xl"
											{...props}
										/>
									),
								}}
							>
								{response[0].content}
							</Markdown>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
