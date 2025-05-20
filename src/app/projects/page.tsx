import Container from "@/components/container";
import RandomQuote from "@/components/home-page/random-quote";
import ProjectsList from "@/components/projects-page/projects-list";
import { Metadata } from "next";
import { metadata as rootMeta } from "@/app/layout";

export const metadata: Metadata = {
	...rootMeta,
	title: "~cakes - projects",
	description: "Projects I am working on.",
	openGraph: {
		...rootMeta.openGraph,
		title: "~cakes - projects",
		description: "Projects I am working on.",
		url: "https://haiiro.moe/~cakes/projects",
	},
	twitter: {
		...rootMeta.twitter,
		card: "summary_large_image",
		title: "~cakes - projects",
		description: "Projects I am working on.",
		site: "https://haiiro.moe/~cakes/projects",
	},
};

export default function ProjectsPage() {
	return (
		<main className="flex flex-col mx-auto w-full page-transition projects page-root">
			<Container asSection bgVariant margin={48} blob>
				<h1 className="font-serif font-extralight text-6xl lg:text-8xl">
					The <span className="text-gradient">projects</span> that
					matter
				</h1>
				<div className="mx-3">
					<p className="mt-4 max-w-lg text-2xl">
						Small or big, these are all projects that I&apos;m
						actually proud of. Most of them are constantly
						work-in-progress.
					</p>
				</div>
			</Container>
			<Container asSection>
				<div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
					<ProjectsList />
				</div>
			</Container>
			<Container asSection bgVariant>
				<RandomQuote />
			</Container>
		</main>
	);
}
