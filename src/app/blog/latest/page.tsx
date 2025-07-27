"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Post } from "../../../components/blog-page/get-posts";

function LatestBlogPostPage() {
	const router = useRouter();

	useEffect(() => {
		fetch("/~cakes/api/blog/posts")
			.then((res) => {
				return res.json();
			})
			.then((data: Post[]) => {
				const post = data.sort((a, b) => {
					const ad = new Date(a.date);
					const bd = new Date(b.date);
					if (ad < bd) return 1;
					return 0;
				})[0];
				if (!post) throw new Error("no post found");

				router.replace(`/blog/${post.slug}`);
			})
			.catch((err) => {
				console.error(
					"Error getting the blog posts. Returning home.",
					err
				);
				router.replace("/blog");
			});
	}, [router]);

	return (
		<main className="flex flex-col mx-auto w-full page-transition blog page-root overflow-y-hidden">
			<div className="min-h-screen flex justify-center items-center text-5xl font-serif">
				Redirecting...
			</div>
		</main>
	);
}

export default LatestBlogPostPage;
