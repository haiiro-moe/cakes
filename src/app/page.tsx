import Container from "@/components/container";
import OnlineDisplay from "@/components/home-page/online-display";
import ProjectCards from "@/components/home-page/project-cards";
import RandomQuote from "@/components/home-page/random-quote";
import { Endpoints } from "@octokit/types";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

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
					<Link href="/about" className="mt-6 btn btn-primary">
						Tell me more!
					</Link>
				</div>
			</Container>
			<Container asSection textAlign="center">
				<h1 className="font-semibold text-6xl">Some of my projects</h1>
				<p className="mt-4 text-2xl">
					Here are some of my projects that I have worked on.
				</p>
				<ProjectCards projects={projects} />
				<div className="text-center">
					<Link href="/projects" className="mt-6 btn btn-primary">
						See all my projects
					</Link>
				</div>
			</Container>
			<Container asSection bgVariant>
				<h1 className="font-semibold text-6xl">About me</h1>
				<p className="mt-4 text-2xl">
					I have an{" "}
					<Link href="/about" className="link link-primary">
						about page
					</Link>{" "}
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
					<li>I’m a big fan of animanga and witches.</li>
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
