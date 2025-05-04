"use client";

import { useEffect, useRef, useState } from "react";

export default function RandomQuote() {
	const [quote, setQuote] = useState({ text: "", author: "" });
	const firstRender = useRef<boolean>(true);

	useEffect(() => {
		// TODO: Make something cool here
		const quotes = [
			{ text: `Make your own space, be creative :D`, author: `cakes` },
			{ text: `I am not a robot.`, author: `cakes` },
			{ text: `Algorithm? None of that here.`, author: `cakes` },
			{
				text: `I don't know what I'm doing, but I'm doing it anyway.`,
				author: `cakes`,
			},
			{
				text: `How do you rotate text in MS Paint?`,
				author: `internet person`,
			},
			{
				text: `Jarvis, crank that Soulja Boy.`,
				author: `internet person`,
			},
			{
				text: `The strong urge to hyperfocus on something until 2 AM.`,
				author: `cakes`,
			},
			{
				text: `Are you reloading the page to see all these or what?`,
				author: `cakes`,
			},
		];

		const getRandomQuote = () => {
			return quotes[Math.floor(Math.random() * quotes.length)];
		};

		if (firstRender.current) {
			setQuote(getRandomQuote());
			firstRender.current = false;
		}
	}, [quote]);

	return (
		<div className="font-serif">
			<p>{quote.text}</p>
			<p className="text-sm italic">- {quote.author}</p>
		</div>
	);
}
