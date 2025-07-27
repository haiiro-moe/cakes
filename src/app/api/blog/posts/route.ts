import { CakePosts } from "@/components/blog-page/get-posts";

let posts: CakePosts;

export function getPosts() {
	if (!posts) posts = new CakePosts();
	if (
		posts.initiatedAt.getTime() < Date.now() - 1000 * 60 * 60 &&
		process.env.ENVIRONMENT !== "development"
	) {
		posts = new CakePosts();
	} else {
		posts = new CakePosts();
	}

	return posts;
}

export async function GET(request: Request) {
	// Check if the posts were initiated more than an hour ago and the dev environment is production
	if (!posts) posts = new CakePosts();
	if (
		posts.initiatedAt.getTime() < Date.now() - 1000 * 60 * 60 &&
		process.env.ENVIRONMENT !== "development"
	) {
		posts = new CakePosts();
	} else {
		posts = new CakePosts();
	}

	let allPosts = posts.posts;

	// Sort posts by date in descending order if there are no query parameters
	const url = new URL(request.url);
	const searchParams = url.searchParams;
	if (searchParams.get("sort") === "asc") {
		allPosts.sort(
			(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
		);
	} else {
		allPosts.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	}
	if (searchParams.get("slug")) {
		const slug = searchParams.get("slug");
		allPosts = allPosts.filter((post) => post.slug === slug);
	}
	if (searchParams.get("type")) {
		const type = searchParams.get("type");
		allPosts = allPosts.filter((post) => post.type === type);
	}
	if (searchParams.get("tags")) {
		const tags = searchParams.get("tags")?.split(",");
		allPosts = allPosts.filter((post) => {
			if (!post.tags) {
				return false;
			}
			return post.tags.some((t) => tags?.includes(t));
		});
	}
	if (searchParams.get("before")) {
		const beforeStr = searchParams.get("before");
		let beforeDate;
		try {
			beforeDate = new Date(beforeStr!);
		} catch {
			return new Response("Invalid date format", {
				status: 400,
				headers: { "Content-Type": "text/plain" },
			});
		}
		allPosts = allPosts.filter((post) => {
			const date = new Date(post.date);
			return date.getTime() < new Date(beforeDate).getTime();
		});
	}
	if (searchParams.get("after")) {
		const afterStr = searchParams.get("after");
		let afterDate;
		try {
			afterDate = new Date(afterStr!);
		} catch {
			return new Response("Invalid date format", {
				status: 400,
				headers: { "Content-Type": "text/plain" },
			});
		}
		allPosts = allPosts.filter((post) => {
			const date = new Date(post.date);
			return date.getTime() > new Date(afterDate).getTime();
		});
	}
	if (searchParams.get("search")) {
		const search = searchParams.get("search");
		allPosts = allPosts.filter((post) => {
			if (!post.title || !post.description) {
				return false;
			}
			return (
				post.title.toLowerCase().includes(search!.toLowerCase()) ||
				post.description.toLowerCase().includes(search!.toLowerCase())
			);
		});
	}
	if (!searchParams.get("drafts")) {
		allPosts = allPosts.filter((p) => {
			if (!p.tags) return p;
			if (!p.tags.includes("draft")) return p;
		});
	}

	return new Response(JSON.stringify(allPosts), {
		headers: { "Content-Type": "application/json" },
	});
}
