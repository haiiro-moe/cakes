import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
	title: string;
	description: string;
	slug: string;
	image?: string;
	date: string;
	type: "micro" | "blog";
	tags: string[];
	content?: string;
}

export class CakePosts {
	public posts: Post[] = [];
	public initiatedAt: Date = new Date();

	public constructor() {
		this.posts = this.getPosts();
	}

	public getPosts(): Post[] {
		const postsDirectory = path.join(process.cwd(), "posts");
		const fileNames = fs.readdirSync(postsDirectory);
		const allPostsData: Post[] = fileNames.map((fileName) => {
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const matterResult = matter(fileContents);
			return {
				title: matterResult.data.title,
				description: matterResult.data.description,
				slug: matterResult.data.slug || fileName.replace(/\.md$/, ""),
				image: matterResult.data.image,
				type: matterResult.data.type || "blog",
				date: matterResult.data.date,
				tags: matterResult.data.tags,
				content: matterResult.content,
			};
		});
		return allPostsData;
	}

	public getPostBySlug(slug: string): Post | null {
		const post = this.posts.find((post) => post.slug === slug);
		if (!post) {
			return null;
		}
		return post;
	}

	public getPostsByType(type: "blog" | "micro"): Post[] {
		return this.posts.filter((post) => post.type === type);
	}

	public getPostsByTags(tag: string[]): Post[] {
		return this.posts.filter((post) => {
			if (!post.tags) {
				return false;
			}
			return post.tags.some((t) => tag.includes(t));
		});
	}

	public getPostsByDate(before: string, after: string): Post[] {
		return this.posts.filter((post) => {
			const date = new Date(post.date);
			const beforeDate = new Date(before);
			const afterDate = new Date(after);
			return date < beforeDate && date > afterDate;
		});
	}

	public getPostsBySearch(search: string): Post[] {
		return this.posts.filter((post) => {
			if (!post.title || !post.description) {
				return false;
			}
			return (
				post.title.toLowerCase().includes(search.toLowerCase()) ||
				post.description.toLowerCase().includes(search.toLowerCase())
			);
		});
	}
}
