import Container from "@/components/container";
import RandomQuote from "@/components/home-page/random-quote";
import ProjectContainer from "@/components/projects-page/project-container";
import fs from "node:fs";
import path from "node:path";

export type Project = {
	name: string;
	short_description: string;
	description: string;
	url: string;
	image?: string;
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
					{/* Asuka */}
					<ProjectContainer
						project={{
							name: "Asuka",
							description: fs.readFileSync(
								path.join(process.cwd(), "projects/asuka.md"),
								"utf-8"
							),
							short_description:
								"A Discord bot for a small community.",
							url: "https://github.com/haiiro-moe/asuka",
							image: "/projects/asuka.png",
						}}
					/>

					{/* Rescorer */}
					<ProjectContainer
						project={{
							name: "AniList Rescorer",
							description: fs.readFileSync(
								path.join(
									process.cwd(),
									"projects/rescorer.md"
								),
								"utf-8"
							),
							short_description:
								"A tool for AniList to re-score your list just a bit easier.",
							url: "https://haiiro.moe/rescore",
							image: "/projects/rescorer.png",
						}}
					/>

					{/* haiiro */}
					<ProjectContainer
						project={{
							name: "haiiro",
							description: fs.readFileSync(
								path.join(process.cwd(), "projects/haiiro.md"),
								"utf-8"
							),
							short_description:
								'Haiiro, my personal "brand", or whatever. Also the small group.',
							url: "https://github.com/haiiro-moe/",
							image: "/projects/haiiro.png",
						}}
					/>

					{/* Shigen */}
					<ProjectContainer
						project={{
							name: "Shigen",
							description: fs.readFileSync(
								path.join(process.cwd(), "projects/shigen.md"),
								"utf-8"
							),
							short_description:
								"A LAN resource monitoring tool built with Rust and React.",
							url: "https://github.com/Kex1016/shigen",
						}}
					/>

					{/* Undisclosed Minecraft modpack */}
					<ProjectContainer
						project={{
							name: "Undisclosed Minecraft modpack",
							description: fs.readFileSync(
								path.join(
									process.cwd(),
									"projects/minecraft_pack.md"
								),
								"utf-8"
							),
							short_description:
								"A Minecraft modpack I'm currently working on. It's a secret for now.",
							url: "#not_telling",
							image: "/projects/minecraft_pack.png",
						}}
					/>
				</div>
			</Container>
			<Container asSection bgVariant>
				<RandomQuote />
			</Container>
		</main>
	);
}
