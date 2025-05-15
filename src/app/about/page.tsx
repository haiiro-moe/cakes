import SocialLink from "@/components/about-page/social-link";
import RandomQuote from "@/components/home-page/random-quote";
import RouterLink from "@/components/router-link";
import { ExternalLink } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export async function generateMetadata(
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		...(parent as Metadata),
		title: "~cakes - about",
		description: "Hello who dis?",
		openGraph: {
			title: "~cakes - about",
			description: "Hello who dis?",
			url: "https://haiiro.moe/~cakes/about",
		},
		twitter: {
			card: "summary_large_image",
			title: "~cakes - about",
			description: "Hello who dis?",
			images: [
				{
					url: "./og.png",
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

export default function AboutPage() {
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
							<em>(Or don&apos;t, who am I to tell you)</em>
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
						I am David, a{" "}
						{Math.floor(
							(new Date().getTime() -
								new Date("2002-10-16").getTime()) /
								(1000 * 60 * 60 * 24 * 365.25)
						)}
						-year-old computer science student. I made this site
						because I wanted my own little space on the web.
						It&apos;s so incredibly boring to see so many websites
						that are just the same two colors with an algorithm that
						controls everything you see and hear. I absolutely love
						making stuff, so I thought... why not just make stuff{" "}
						<em>and</em> share it with the world?
					</p>
					<p className="my-4">
						The fact that this is the internet now is kind of... I
						don&apos;t know, unsettling...? Concerning? It&apos;s
						not like I&apos;m completely against AI and all this,
						but come on, we can do so much better than just
						completely replace the human touch.{" "}
						<span className="text-xs text-base-300">
							written using github copilot (/s)
						</span>
					</p>
					<p className="my-4">
						Long story short, me and social media do not go well
						together, and I wanted to make a space just for myself,
						so I made this site. The previous version was made using
						pure HTML and CSS using a custom build system (
						<RouterLink
							href="https://github.com/Kex1016/haiiro"
							className="link link-primary"
						>
							that I have right here
							<ExternalLink className="inline ml-1" size={10} />
						</RouterLink>
						). I always wanted to make something using Next.js, and
						the previous version was a little bit clunky, so I
						straight up remade the whole thing using Next.js, React,
						Tailwind CSS and DaisyUI. Now that I have a properly
						made identity for this site, I hope to make even more
						cool stuff with it!
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
						nicknames was &quot;Kex1016&quot;, which pretty much
						just meant &quot;keksz&quot; in Hungarian, or
						&quot;biscuit&quot; in English. Because I like them.
						Then, someone started calling me &quot;cakes&quot; on
						Discord, because it sounds almost the same. I thought it
						was pretty funny, so when I finally decided to change my
						nickname on AniList to something else, I just went with
						&quot;cakes&quot;. I did not expect it to be free to
						take.
					</p>
					<h1 className="my-4 font-serif font-light text-6xl">
						What do I <span className="text-gradient">like</span>?
					</h1>
					<p className="my-4">
						I think it&apos;s pretty obvious that I like
						programming, and animanga. I also really like reading
						and playing all sorts of games. My taste in latter two
						is veery broad, but I tend to gravitate towards chill
						stuff. In terms of games, I love playing all sorts of
						indie games, mostly roguelikes, RPGs and shooter games.
						I also play League of Legends, but only if I have
						someone to play with...
					</p>
					<p>
						I LOVE MUSIC. I listen to <em>everything</em>. And I
						mean it. Classical, metal, lo-fi, tons and tons of
						electronic music, rap, pop, rock, you name it. Some
						standout artists for me are:
					</p>
					<ul className="bg-base-200 shadow-md mx-auto mt-4 rounded-box w-fit list">
						{(() => {
							const artists = [
								{
									name: "Porter Robinson",
									link: "https://www.youtube.com/@porterrobinson",
									image: "https://safe.haiiro.moe/TdGlBjwWMUqH.jpg",
								},
								{
									name: "Swardy",
									link: "https://www.youtube.com/@Swardy",
									image: "https://safe.haiiro.moe/DUFaS8skR0nX.jpg",
								},
								{
									name: "Kendrick Lamar",
									link: "https://www.youtube.com/@KendrickLamar",
									image: "https://safe.haiiro.moe/gVAzzGafvr7O.jpg",
								},
								{
									name: "Taishi",
									link: "https://www.youtube.com/@Taishi",
									image: "https://safe.haiiro.moe/WIXGYqnCMt8t.jpg",
								},
								{
									name: "Lena Raine",
									link: "https://www.youtube.com/@LenaRaine",
									image: "https://safe.haiiro.moe/oHXAGJDJjg4e.jpg",
								},
							];
							return artists.map((artist, index) => (
								<li
									key={index}
									className="hover:bg-base-300 list-row"
								>
									<RouterLink
										href={artist.link}
										className="flex items-center"
									>
										<Image
											width={64}
											height={64}
											src={artist.image}
											className="mr-4 rounded-box w-16 h-16 object-cover aspect-square"
											alt={artist.name}
										/>
										<div>
											<p className="font-semibold text-sm">
												{artist.name}
											</p>
											<p className="opacity-60 text-xs">
												{artist.link}
											</p>
										</div>
									</RouterLink>
								</li>
							));
						})()}
					</ul>
					<h1 className="my-4 font-serif font-light text-6xl">
						Some more <span className="text-gradient">links</span>,
						please!
					</h1>
					<div className="links_outer">
						<div className="flex flex-wrap gap-3 mt-4 links_inner">
							<SocialLink
								href="https://github.com/Kex1016"
								icon={
									<svg
										role="img"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										className="fill-current w-6 h-6 text-base-content"
									>
										<title>GitHub</title>
										<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
									</svg>
								}
								title={
									<>
										GitHub:{" "}
										<span className="bg-base-200 px-2 border border-base-300 rounded-sm font-mono">
											Kex1016
										</span>
									</>
								}
								description="The place for questionable code!"
							/>
							<SocialLink
								href="https://anilist.co/user/cakes"
								icon={
									<svg
										role="img"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										className="fill-current w-6 h-6 text-base-content"
									>
										<title>AniList</title>
										<path d="M24 17.53v2.421c0 .71-.391 1.101-1.1 1.101h-5l-.057-.165L11.84 3.736c.106-.502.46-.788 1.053-.788h2.422c.71 0 1.1.391 1.1 1.1v12.38H22.9c.71 0 1.1.392 1.1 1.101zM11.034 2.947l6.337 18.104h-4.918l-1.052-3.131H6.019l-1.077 3.131H0L6.361 2.948h4.673zm-.66 10.96-1.69-5.014-1.541 5.015h3.23z" />
									</svg>
								}
								title={
									<>
										AniList:{" "}
										<span className="bg-base-200 px-2 border border-base-300 rounded-sm font-mono">
											cakes
										</span>
									</>
								}
								description="Dangerous amount of girls' love."
							/>
							<SocialLink
								href="@haiiro.moe"
								icon={
									<svg
										role="img"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										className="fill-current w-6 h-6 text-base-content"
									>
										<title>Discord</title>
										<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
									</svg>
								}
								title={
									<>
										Discord:{" "}
										<span className="bg-base-200 px-2 border border-base-300 rounded-sm font-mono">
											@haiiro.moe
										</span>
									</>
								}
								description="Probably my most frequent hangout spot."
								copy
								copyMessage="Username copied to clipboard!"
							/>
						</div>
					</div>
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
