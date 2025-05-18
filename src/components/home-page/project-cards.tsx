"use client";

import { Endpoints } from "@octokit/types";
import { useEffect, useRef, useState } from "react";

const getRandomColor = () => {
	const colors = [
		{
			background: "bg-primary",
			text: "text-primary-content",
			badge: "badge-primary",
			button: "btn-primary",
		},
		{
			background: "bg-secondary",
			text: "text-secondary-content",
			badge: "badge-secondary",
			button: "btn-secondary",
		},
		{
			background: "bg-accent",
			text: "text-accent-content",
			badge: "badge-accent",
			button: "btn-accent",
		},
		{
			background: "bg-neutral",
			text: "text-neutral-content",
			badge: "badge-neutral",
			button: "btn-neutral",
		},
		{
			background: "bg-base-200",
			text: "text-base-content",
			badge: "badge-base-200",
			button: "btn-base-200",
		},
	];
	return colors[Math.floor(Math.random() * colors.length)];
};

const GitHubCard = ({
	id,
	name,
	description,
	language,
	url,
}: {
	id: number;
	name: string;
	description: string;
	language: string;
	url: string;
}) => {
	const randomColor = getRandomColor();

	return (
		<div
			key={id}
			id={`project-card-${id}`}
			className={`shadow-xl w-96 card ${randomColor.background} ${randomColor.text} opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out min-w-[280px] min-h-[200px]`}
		>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p className="text-left">{description}</p>
				<div className="flex justify-end items-end card-actions">
					<span
						className={`badge badge-xl ${randomColor.badge} text-sm`}
					>
						{language}
					</span>
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						className={`btn btn-sm ${randomColor.button}`}
					>
						View on GitHub
					</a>
				</div>
			</div>
		</div>
	);
};

export default function ProjectCards({
	projects,
}: {
	projects?: Endpoints["GET /users/{username}/repos"]["response"]["data"];
}) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const [cards, setCards] = useState<
		{
			id: number;
			name: string;
			description: string;
			url: string;
			language: string;
		}[]
	>([]);

	useEffect(() => {
		if (!projects) {
			return;
		}

		// Make sure this function only works until 1280px
		if (window.innerWidth < 1280) {
			return;
		}

		const newCards = [];
		const container = document.getElementById("project-cards");
		if (container) {
			for (let i = 0; i < projects.length; i++) {
				const project = projects[i];

				newCards.push({
					id: project.id,
					name: `${project.name}`,
					description: `${project.description || "No description"}`,
					url: `${project.html_url}`,
					language: `${project.language || "N/A"}`,
				});
			}
			setCards(newCards);
		}

		const el = containerRef.current;
		if (!el) return;
		const speed = 1.5; // Adjust this value to control the scroll speed

		const onWheel = (e: WheelEvent) => {
			// Only hijack primarily-vertical wheel events
			if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

			// compute bounds
			const maxScrollLeft = el.scrollWidth - el.clientWidth;
			const atStart = el.scrollLeft <= 0;
			const atEnd = el.scrollLeft >= maxScrollLeft;

			// If scrolling up but already at start, or down but at end, ignore
			if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) {
				return;
			}

			// Otherwise reroute scroll
			e.preventDefault();
			el.scrollLeft += e.deltaY * speed;
		};

		el.addEventListener("wheel", onWheel, { passive: false });
		return () => {
			el.removeEventListener("wheel", onWheel);
		};
	}, [projects]);

	return (
		<div
			ref={containerRef}
			className="relative flex flex-row items-center gap-4 mx-3 mt-5 pb-2 overflow-x-scroll overflow-y-auto scroll-smooth scrollbar-hide"
			id="project-cards"
			onScrollCapture={(e) => {
				// if scrolling up and down on this element, make sure to scroll sideways
			}}
		>
			{cards.map((card) => (
				<GitHubCard
					key={card.id}
					id={card.id}
					name={card.name}
					description={card.description}
					language={card.language}
					url={card.url}
				/>
			))}
		</div>
	);
}
