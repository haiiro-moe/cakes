"use client";

import { Project } from "@/app/api/projects/route";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";
import Markdown from "react-markdown";
import { goToHeading } from "../blog-page/post-content";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

function slugify(str: string) {
	return str
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export default function ProjectContainer({ project }: { project: Project }) {
	function goToProject(
		event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
	) {
		event.preventDefault();
		const element = document.getElementById(
			slugify(project.name)
		) as HTMLDialogElement;
		if (element) {
			element.showModal();
		} else {
			window.open(project.url, "_blank");
		}
	}

	function headingClickHandler(e: MouseEvent<HTMLHeadingElement>) {
		e.preventDefault();
		console.log("Heading clicked:", e.currentTarget);

		// Scroll to the heading with a padding of 100px and smooth behavior
		const targetId = e.currentTarget.id;
		if (targetId) {
			goToHeading(targetId);
			window.history.pushState(null, "", `#${targetId}`);
		}
	}

	return (
		<>
			<a
				href={`#${project.name}`}
				className="bg-base-200 hover:bg-base-300 shadow-md border border-base-300 transition-all duration-200 ease-in-out card card-side"
				onClick={goToProject}
			>
				{project.image && (
					<figure className="w-1/3">
						<Image
							src={`/~cakes/${project.image}`}
							alt={project.name}
							className="object-cover"
							width={500}
							height={300}
						/>
					</figure>
				)}
				<div className="card-body">
					<h2 className="card-title">{project.name}</h2>
					<p>{project.short_description}</p>
					<div className="card-actions">
						<button
							className="btn btn-primary"
							onClick={goToProject}
						>
							View Project
						</button>
					</div>
				</div>
			</a>
			<dialog id={slugify(project.name)} className="modal">
				<div className="modal-box">
					<div className="modal-content">
						<Markdown
							remarkPlugins={[remarkMath, remarkGfm]}
							rehypePlugins={[
								rehypeKatex,
								rehypeRaw,
								rehypeSlug,
								[
									rehypeAutolinkHeadings,
									{
										behavior: "wrap",
										properties: {
											className:
												"inline-flex heading-link",
										},
									},
								],
							]}
							components={{
								p: ({ ...props }) => (
									<p className="my-4 text-md" {...props} />
								),
								h1: ({ ...props }) => (
									<h1
										className="my-4 font-serif text-5xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								h2: ({ ...props }) => (
									<h2
										className="my-4 font-serif text-4xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								h3: ({ ...props }) => (
									<h3
										className="my-4 text-3xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								h4: ({ ...props }) => (
									<h4
										className="my-4 text-2xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								h5: ({ ...props }) => (
									<h5
										className="my-4 text-xl"
										onClick={headingClickHandler}
										{...props}
									/>
								),
								a: ({ ...props }) =>
									props.className?.includes(
										"heading-link"
									) ? (
										<a {...props} />
									) : (
										<a
											className="inline-flex gap-0.5 link link-primary"
											target="_blank"
											rel="noopener noreferrer"
											{...props}
										>
											{props.children}
											<ExternalLink size={12} />
										</a>
									),
								blockquote: ({ ...props }) => (
									<div className="bg-base-200 shadow-sm my-5 border-primary border-l-4 card">
										<div className="p-3 card-body">
											<blockquote {...props} />
										</div>
									</div>
								),
								ul: ({ ...props }) => (
									<ul
										className="my-4 list-disc list-inside"
										{...props}
									/>
								),
							}}
						>
							{project.description}
						</Markdown>
					</div>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
