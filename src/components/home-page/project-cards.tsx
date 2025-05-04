"use client";

import { Endpoints } from "@octokit/types";
import { CSSProperties, useEffect, useState } from "react";

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
	style,
}: {
	id: number;
	name: string;
	description: string;
	language: string;
	url: string;
	style?: React.CSSProperties;
}) => {
	const randomColor = getRandomColor();

	return (
		<div
			key={id}
			id={`project-card-${id}`}
			className={`shadow-xl w-96 card ${randomColor.background} ${randomColor.text} hover:z-10 hover:scale-105`}
			style={style}
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
	const [cards, setCards] = useState<
		{
			id: number;
			name: string;
			description: string;
			url: string;
			language: string;
			style: CSSProperties;
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
			const containerWidth = container.clientWidth;
			const containerHeight = container.clientHeight;

			for (const project of projects) {
				const card = document.getElementById(
					`project-card-${project.id}`
				);
				const cardWidth = card?.clientWidth || 300; // Default width if card is not found
				const cardHeight = card?.clientHeight || 200; // Default height if card is not found
				let x = Math.random() * (containerWidth - cardWidth - 20) + 10;
				let y =
					Math.random() * (containerHeight - cardHeight - 20) + 10;

				// Check for overlap with existing cards
				const tolerance = 200; // Tolerance for overlap
				for (let j = 0; j < newCards.length; j++) {
					const card = newCards[j];

					// Convert string to number for comparison
					const cardLeft = parseFloat(
						card.style.left?.toString().replace("px", "").trim() ||
							"0"
					);
					const cardTop = parseFloat(
						card.style.top?.toString().replace("px", "").trim() ||
							"0"
					);

					if (
						Math.abs(x - cardLeft) < tolerance &&
						Math.abs(y - cardTop) < tolerance
					) {
						x =
							Math.random() * (containerWidth - cardWidth - 20) +
							10;
						y =
							Math.random() *
								(containerHeight - cardHeight - 20) +
							10;
						j = -1; // Restart the loop to check for overlaps again
					}
				}

				const style: CSSProperties = {
					position: "absolute",
					left: `${x}px`,
					top: `${y}px`,
					width: `${cardWidth}px`,
					height: `${cardHeight}px`,
					transition: "scale 0.15s ease-in-out",
				};

				newCards.push({
					id: project.id,
					name: `${project.name}`,
					description: `${project.description || "No description"}`,
					url: `${project.html_url}`,
					language: `${project.language || "N/A"}`,
					style,
				});
			}
			setCards(newCards);
		}
	}, [projects]);

	return (
		<div
			className="relative flex flex-col items-center mx-3 mt-5 min-h-[500px]"
			id="project-cards"
		>
			{cards.map((card) => (
				<GitHubCard
					key={card.id}
					id={card.id}
					name={card.name}
					description={card.description}
					language={card.language}
					url={card.url}
					style={card.style}
				/>
			))}
		</div>
	);
}
