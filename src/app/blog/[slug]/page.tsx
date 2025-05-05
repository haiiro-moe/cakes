"use client";

import { Post } from "@/components/blog-page/get-posts";
import PostCard from "@/components/blog-page/post-card";
import PostContent from "@/components/blog-page/post-content";
import RandomQuote from "@/components/home-page/random-quote";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
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
