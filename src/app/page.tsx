import Container from "@/components/container";
import OnlineDisplay from "@/components/home-page/online-display";
import ProjectCards from "@/components/home-page/project-cards";
import RandomQuote from "@/components/home-page/random-quote";
import RouterLink from "@/components/router-link";
import { Endpoints } from "@octokit/types";
import type { Metadata, ResolvingMetadata } from "next";

const projectCache: {
	[key: string]: {
		data: Endpoints["GET /users/{username}/repos"]["response"]["data"];
		createdAt: number;
	};
} = {};

export async function generateMetadata(
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		...(parent as Metadata),
		title: "~cakes - home",
		description: "Welcome to my personal site.",
	};
}

async function fetchProjects(): Promise<
	Endpoints["GET /users/{username}/repos"]["response"]["data"]
> {
	// Check if the data is already cached
	const cacheKey = "projects";
	const cachedData = projectCache[cacheKey];
	if (cachedData) {
		const currentTime = Date.now();
		const cacheDuration = 1000 * 60 * 60; // 1 hour
		if (currentTime - cachedData.createdAt < cacheDuration) {
			console.log("Using cached data");

			return cachedData.data;
		} else {
			// If the cache is expired, delete it
			delete projectCache[cacheKey];
		}
	}
	// Fetch public repositories from GitHub API
	const response = await fetch(
		"https://api.github.com/users/Kex1016/repos?per_page=5&sort=updated"
	);
	const data = await response.json();
	// Cache the data with the current timestamp
	projectCache[cacheKey] = {
		data,
		createdAt: Date.now(),
	};
	return data;
}

export default async function Home() {
	const projects = await fetchProjects();

	return (
		<main className="flex flex-col mx-auto w-full page-transition home page-root">
			<Container asSection bgVariant margin={48} blob>
				<h1 className="relative w-fit font-serif font-extralight text-8xl">
					Welcome to <span className="text-gradient">~cakes</span>
					<OnlineDisplay />
				</h1>
				<div className="mx-3 w-full">
					<p className="mt-4 max-w-lg text-2xl">
						A personal site for sharing my thoughts, ideas and
						projects. I&apos;m cakes. Nice to meet you!
					</p>
					<RouterLink href="/about" className="mt-6 btn btn-primary">
						Tell me more!
					</RouterLink>
				</div>
			</Container>
			<Container asSection textAlign="center">
				<h1 className="font-semibold text-6xl">Some of my projects</h1>
				<p className="mt-4 text-2xl">
					Here are my most recently updated projects.
				</p>
				<ProjectCards projects={projects} />
				<div className="flex justify-center gap-4 text-center">
					<RouterLink
						href="/projects"
						className="mt-6 btn btn-primary"
					>
						See my notable projects
					</RouterLink>
					<RouterLink
						href="https://github.com/Kex1016?tab=repositories"
						className="mt-6 btn btn-secondary"
						target="_blank"
					>
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="fill-current w-5 h-5"
						>
							<title>GitHub</title>
							<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
						</svg>
					</RouterLink>
				</div>
			</Container>
			<Container asSection bgVariant>
				<h1 className="font-semibold text-6xl">About me</h1>
				<p className="mt-4 text-2xl">
					I have an{" "}
					<RouterLink href="/about" className="link link-primary">
						about page
					</RouterLink>{" "}
					if you want to know even more about me, but here are some
					tidbits:
				</p>
				<ul className="mt-4 text-2xl list-disc list-inside">
					<li>My name&apos;s David.</li>
					<li>I really enjoy web development.</li>
					<li>
						I love taking on challenges and figuring things out.
					</li>
					<li>
						I tend to make things extra for even the simplest tasks.
					</li>
					<li>I&apos;m a big fan of animanga and witches.</li>
					<li>I like chatting about my interests.</li>
				</ul>
			</Container>
			<Container asSection relative>
				<div className="top-0 right-16 absolute flex justify-center items-center h-[calc(100%-4rem)] aspect-square text-7xl">
					<span className="font-serif">haiiro</span>
					<span className="absolute opacity-25 rotate-12">灰色</span>
				</div>
				<h1 className="font-semibold text-6xl">What even is haiiro?</h1>
				<p className="mt-4 max-w-3xl text-2xl text-justify">
					It started off as just a simple personal site. I then had an
					idea to invite a couple people into a GitHub org, and have
					them all make cool stuff together. The whole thing&apos;s
					very WIP so far, but I hope to make it a fun little place
					for others to check out.
				</p>
			</Container>
			<Container asSection bgVariant>
				<RandomQuote />
			</Container>
		</main>
	);
}
