"use client";

import Masonry from "react-masonry-css";
import Container from "../container";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Post } from "./get-posts";
import PostCard from "./post-card";

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

	// TODO: Implement filtering
	// const fullUrl = `${url}?${params.toString()}`;
	const fullUrl = `${url}`;
	const response = await fetch(fullUrl);
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await response.json();
	if (!data) {
		throw new Error("No data found");
	}
	// console.log("data", data);

	return data;
}

export default function BlogPageContents() {
	const [search, setSearch] = useState("");
	const [tags, setTags] = useState("");
	const [before, setBefore] = useState("");
	const [after, setAfter] = useState("");

	const {
		data: posts,
		error,
		isLoading,
	} = useSWR(
		["/~cakes/api/blog/posts", search, tags, before, after],
		([url, search, tags, before, after]) =>
			fetcher(url, { arg: { search, tags, before, after } })
	);

	useEffect(() => {
		// Check if the URL has a tag query parameter
		const urlParams = new URLSearchParams(window.location.search);
		const tagParam = urlParams.get("tags");
		if (tagParam) {
			// If it does, set the tags state to the value of the tag parameter
			setTags(tagParam);
		}
		// Check if the URL has a search query parameter
		const searchParam = urlParams.get("search");
		if (searchParam) {
			// If it does, set the search state to the value of the search parameter
			setSearch(searchParam);
		}
		// Check if the URL has a before query parameter
		const beforeParam = urlParams.get("before");
		if (beforeParam) {
			// If it does, set the before state to the value of the before parameter
			setBefore(beforeParam);
		}
		// Check if the URL has an after query parameter
		const afterParam = urlParams.get("after");
		if (afterParam) {
			// If it does, set the after state to the value of the after parameter
			setAfter(afterParam);
		}
	}, [search, tags, before, after]);

	return (
		<>
			<Container asSection bgVariant margin={48} blob>
				<h1 className="font-serif font-extralight text-6xl lg:text-8xl">
					The <span className="text-gradient">blog</span> page.
				</h1>
				<div className="mx-3">
					<p className="mt-4 max-w-lg text-xl lg:text-2xl">
						{!tags && !search && !before && !after && (
							<>
								Lots of text with not a whole lot of thought.
								Imagine <span className="italic">that</span>{" "}
								keyboard cat gif here.
							</>
						)}
						{/* TODO: Properly display the filters */}
						{(tags || search || before || after) && (
							<>
								You are searching for{" "}
								<span className="italic">
									{tags || search || before || after}
								</span>
								.
							</>
						)}
					</p>
				</div>
			</Container>
			<Container asSection>
				<h1 className="mb-10 font-semibold text-4xl lg:text-6xl">
					My posts
				</h1>
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
				{/* TODO: Group the posts */}
				{posts && (
					<Masonry
						breakpointCols={{
							default: 3,
							1100: 2,
							700: 1,
						}}
						className="masonry-grid mx-auto max-w-6xl"
						columnClassName="masonry-grid_column"
					>
						{posts.map((post: Post) => (
							<PostCard key={post.slug} post={post} />
						))}
					</Masonry>
				)}
			</Container>
		</>
	);
}
