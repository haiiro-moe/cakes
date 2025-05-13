"use client";

import RandomQuote from "@/components/home-page/random-quote";

export default function BlogPage() {
	return (
		<main className="flex flex-col mx-auto w-full page-transition blog page-root">
			<section className="flex flex-col border-b border-base-300 w-full blob">
				<div className="mx-auto mt-48 pb-16 container">
					<h1 className="font-serif font-extralight text-8xl">
						So. <span className="text-gradient">Who am I?</span>
					</h1>
					<div className="mx-3">
						<p className="mt-4 max-w-lg text-2xl">
							These will be on the test later, so pay attention!{" "}
							<em>(Or don't, who am I to tell you)</em>
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col bg-base-100 border-b border-base-300 w-full">
				<div className="relative flex flex-col mx-auto mt-16 pb-16 text-left container">
					<h1
						className="my-4 font-serif font-light text-6xl"
						id="who-am-i"
					>
						Thank <span className="text-gradient">you</span> for
						checking out my site!
					</h1>
					<p className="my-4">
						I am David, a 21-year-old computer science student. I
						made this site because I wanted my own little space on
						the web. It's so incredibly boring to see so many
						websites that are just the same two colors with an
						algorithm that controls everything you see and hear. I
						absolutely love making stuff, so I thought... why not
						just make stuff <em>and</em> share it with the world?
					</p>
					<p className="my-4">
						The fact that this is the internet now is kind of... I
						don't know, unsettling...? Concerning? It's not like I'm
						completely against AI and all this, but come on, we can
						do so much better than just completely replace the human
						touch.{" "}
						<span className="text-xs text-base-300">
							written using github copilot (/s)
						</span>
					</p>
					<p className="my-4">
						Long story short, me and social media do not go well
						together, and I wanted to make a space just for myself,
						so I made this site.
					</p>
					<h1
						className="my-4 font-serif font-light text-6xl"
						id="why-cakes"
					>
						Why <span className="text-gradient">cakes</span>?
					</h1>
					<p className="my-4">
						This was a question a bunch of people asked me, so I
						will write it at the top. One of my first actual online
						nicknames was "Kex1016", which pretty much just meant
						"keksz" in Hungarian, or "biscuit" in English. Because I
						like them. Then, someone started calling me "cakes" on
						Discord, because it sounds almost the same. I thought it
						was pretty funny, so when I finally decided to change my
						nickname on AniList to something else, I just went with
						"cakes". I did not expect it to be free to take.
					</p>
					<h1 className="my-4 font-serif font-light text-6xl">
						What do I <span className="text-gradient">like</span>?
					</h1>
					<p className="my-4">
						I think it's pretty obvious that I like programming, and
						animanga. I also really like reading and playing all
						sorts of games.
					</p>
					<h1 className="my-4 font-serif font-light text-6xl">
						Why <span className="text-gradient">cakes</span>?
					</h1>
					<p className="my-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Explicabo delectus obcaecati ipsum ratione velit harum
						cumque quod eveniet unde maiores nostrum nulla
						voluptates beatae architecto sunt, sequi amet dicta
						iusto!
					</p>
				</div>
			</section>
			<section className="flex flex-col border-b border-base-300 w-full">
				<div className="mx-auto mt-16 pb-16 container">
					<RandomQuote />
				</div>
			</section>
		</main>
	);
}
