"use client";

import useSWR from "swr";
import { Project } from "@/app/api/projects/route";
import ProjectContainer from "./project-container";
import ProjectContainerSkeleton from "./project-container-skeleton";

async function fetcher(url: string): Promise<Project[]> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await response.json();
	if (!data) {
		throw new Error("No data found");
	}
	return data;
}

export default function ProjectsList() {
	const { data, error } = useSWR("/~cakes/api/projects", fetcher);

	if (error) return <div>Error loading projects</div>;
	if (!data)
		return (
			<>
				<ProjectContainerSkeleton />
				<ProjectContainerSkeleton />
				<ProjectContainerSkeleton />
				<ProjectContainerSkeleton />
			</>
		);

	return (
		<>
			{data.map((project) => (
				<ProjectContainer key={project.name} project={project} />
			))}
		</>
	);
}
