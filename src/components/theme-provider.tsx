"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider() {
	const [theme, setTheme] = useState("haiiro-light");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		const userPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (storedTheme) {
			setTheme(storedTheme);
		} else if (userPrefersDark) {
			setTheme("haiiro-dark");
		} else {
			setTheme("haiiro-light");
		}
		document.documentElement.setAttribute("data-theme", theme);
		console.log(`Theme set to ${theme}`);
	}, [theme]);

	return (
		<div className="theme-toggle">
			<label className="text-base-content toggle">
				<input
					id="theme-toggle"
					type="checkbox"
					value="haiiro-dark"
					className="theme-controller"
					onChange={(e) => {
						const newTheme = (e.target as HTMLInputElement).checked
							? "haiiro-dark"
							: "haiiro-light";
						setTheme(newTheme);
						localStorage.setItem("theme", newTheme);
						document.documentElement.setAttribute(
							"data-theme",
							newTheme
						);
					}}
					checked={theme === "haiiro-dark"}
					aria-checked={theme === "haiiro-dark"}
					aria-label="Toggle theme"
				/>

				<svg
					aria-label="sun"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<g
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2"
						fill="none"
						stroke="currentColor"
					>
						<circle cx="12" cy="12" r="4"></circle>
						<path d="M12 2v2"></path>
						<path d="M12 20v2"></path>
						<path d="m4.93 4.93 1.41 1.41"></path>
						<path d="m17.66 17.66 1.41 1.41"></path>
						<path d="M2 12h2"></path>
						<path d="M20 12h2"></path>
						<path d="m6.34 17.66-1.41 1.41"></path>
						<path d="m19.07 4.93-1.41 1.41"></path>
					</g>
				</svg>

				<svg
					aria-label="moon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<g
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2"
						fill="none"
						stroke="currentColor"
					>
						<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
					</g>
				</svg>
			</label>
		</div>
	);
}
