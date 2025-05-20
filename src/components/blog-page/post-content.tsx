"use client";

import useSWR from "swr";
import { Post } from "./get-posts";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { MouseEvent, useEffect } from "react";
import Image from "next/image";
import Container from "../container";
import remarkGfm from "remark-gfm";
import RouterLink from "../router-link";

export function goToHeading(targetId: string) {
	const targetElement = document.getElementById(targetId);
	if (targetElement) {
		const offsetTop =
			targetElement.getBoundingClientRect().top + window.scrollY - 100; // Adjust the offset as needed
		window.scrollTo({
			top: offsetTop,
			behavior: "smooth",
		});
	}
}

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
	} = useSWR(["/~cakes/api/blog/posts", slug], ([url, slug]) =>
		fetcher(url, { arg: { slug } })
	);

	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const targetId = hash.substring(1); // Remove the '#' character
			goToHeading(targetId);
		}

		const seenPosts = new Set();
		const seenPostsString = localStorage.getItem("seenPosts");
		if (seenPostsString) {
			const seenPostsArray = JSON.parse(seenPostsString);
			seenPostsArray.forEach((post: string) => seenPosts.add(post));
		}
		seenPosts.add(slug);
		localStorage.setItem("seenPosts", JSON.stringify([...seenPosts]));
	}, [isLoading, slug]);

	if (isLoading) {
		return (
			<>
				<Container asSection bgVariant margin={40} blob>
					<Link href="/blog" className="mb-3 btn btn-ghost">
						<ChevronLeft size={20} />
						Back to posts
					</Link>
					<h1 className="font-serif font-extralight text-6xl lg:text-8xl">
						Loading post...
					</h1>
					<div className="mx-3">
						<p className="mt-4 max-w-lg text-xl lg:text-2xl">
							Please wait while we fetch the post content.
						</p>
					</div>
				</Container>
				<Container asSection>
					<div className="pb-52 post-content">
						There should be a post here, but unfortunately, it is
						loading. Please wait a moment.
					</div>
				</Container>
			</>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center min-h-[90vh] font-serif text-5xl">
				<div>There was an error fetching the post.</div>
				<div>
					<RouterLink href="/blog" className="btn btn-ghost">
						<ChevronLeft size={20} />
						Back to posts
					</RouterLink>
				</div>
			</div>
		);
	}

	if (!response || response.length === 0) {
		return (
			<div className="font-serif text-5xl text-center">No data found</div>
		);
	}

	function headingClickHandler(e: MouseEvent<HTMLHeadingElement>) {
		e.preventDefault();
		console.log("Heading clicked:", e.currentTarget);

		// Scroll to the heading with a padding of 100px and smooth behavior
		const targetId = e.currentTarget.id;
		if (targetId) {
			goToHeading(targetId);
			window.history.pushState(null, "", `#${targetId}`);
		}
	}

	return (
		<>
			<Container asSection bgVariant margin={40} blob outerRelative>
				{response && response[0] && response[0].image && (
					<div className="image-container">
						<Image
							src={`/posts/${response[0].image}`}
							alt="Post Image"
							className="top-0 left-0 -z-[1] absolute mask-l-to-50% blur-xs rounded-lg w-full h-full object-cover blog-image"
							width={1920}
							height={1080}
							priority
						/>
					</div>
				)}
				<Link href="/blog" className="mb-3 btn btn-ghost">
					<ChevronLeft size={20} />
					Back to posts
				</Link>
				<h1 className="font-serif font-extralight text-6xl lg:text-8xl">
					{response && response[0] && response[0].title}
				</h1>
				<div className="mx-3">
					<p className="mt-4 max-w-lg text-xl lg:text-2xl">
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
						{response[0].tags && response[0].tags.length > 0 && (
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
			</Container>
			<Container asSection>
				{/* Render the post content */}
				{response && response[0] && (
					<div className="post-content">
						<Markdown
							remarkPlugins={[remarkMath, remarkGfm]}
							rehypePlugins={[
								rehypeKatex,
								rehypeRaw,
								rehypeSlug,
								[
									rehypeAutolinkHeadings,
									{
										behavior: "wrap",
										properties: {
											className:
												"inline-flex heading-link",
										},
									},
								],
							]}
							components={{
								p: ({ ...props }) => (
									<p className="my-4 text-md" {...props} />
								),
								h1: ({ ...props }) => (
									<h1
										className="my-4 font-serif text-5xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								h2: ({ ...props }) => (
									<h2
										className="my-4 font-serif text-4xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								h3: ({ ...props }) => (
									<h3
										className="my-4 text-3xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								h4: ({ ...props }) => (
									<h4
										className="my-4 text-2xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								h5: ({ ...props }) => (
									<h5
										className="my-4 text-xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								a: ({ ...props }) =>
									props.className?.includes(
										"heading-link"
									) ? (
										<a {...props} />
									) : (
										<a
											className="inline-flex gap-0.5 link link-primary"
											target="_blank"
											rel="noopener noreferrer"
											{...props}
										>
											{props.children}
											<ExternalLink size={12} />
										</a>
									),
								blockquote: ({ ...props }) => (
									<div className="bg-base-200 shadow-sm my-5 border-primary border-l-4 card">
										<div className="p-3 card-body">
											<blockquote {...props} />
										</div>
									</div>
								),
								ul: ({ ...props }) => (
									<ul
										className="my-4 list-disc list-inside"
										{...props}
									/>
								),
							}}
						>
							{response[0].content}
						</Markdown>
					</div>
				)}
			</Container>
		</>
	);
}
