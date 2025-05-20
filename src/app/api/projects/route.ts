import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Project = {
	name: string;
	short_description: string;
	description: string;
	url: string;
	image?: string;
};

const projectCache: Project[] = [];
let cacheTimestamp: number = 0;

const projectsDir = path.join(process.cwd(), "projects");

export async function GET() {
	// Check if any of the files in the projects directory have been modified or the cache is expired
	const stats = fs.statSync(projectsDir);
	const lastModified = stats.mtimeMs;
	if (cacheTimestamp && lastModified < cacheTimestamp) {
		console.log("Using cached data");

		return new Response(JSON.stringify(projectCache), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	}

	// If the data is not cached or expired, read from the filesystem (.md files)
	let projectFiles;
	try {
		projectFiles = fs.readdirSync(projectsDir);
	} catch {
		return new Response("Failed to read project files", {
			status: 500,
			headers: { "Content-Type": "text/plain" },
		});
	}

	const projects: Project[] = projectFiles.map((file) => {
		const filePath = path.join(projectsDir, file);
		let content;
		try {
			content = fs.readFileSync(filePath, "utf-8");
		} catch {
			return {
				name: "",
				short_description: "",
				description: "",
				url: "",
				image: "",
			};
		}
		const { data, content: projectContent } = matter(content);

		return {
			name: data.name,
			short_description: data.short_description,
			description: projectContent,
			url: data.url,
			image: data.image,
		};
	});

	// Cache the projects and update the timestamp
	projectCache.push(...projects);
	cacheTimestamp = Date.now();

	return new Response(JSON.stringify(projects), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
