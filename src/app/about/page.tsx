import SocialLink from "@/components/about-page/social-link";
import Container from "@/components/container";
import RandomQuote from "@/components/home-page/random-quote";
import RouterLink from "@/components/router-link";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { metadata as rootMeta } from "@/app/layout";
import GitHub from "@/components/icons/GitHub";
import AniList from "@/components/icons/AniList";
import Discord from "@/components/icons/Discord";
import Fingerprint from "@/components/icons/Fingerprint";

export const metadata: Metadata = {
	...rootMeta,
	title: "~cakes - about",
	description: "Hello who dis?",
	openGraph: {
		...rootMeta.openGraph,
		title: "~cakes - about",
		description: "Hello who dis?",
		url: "https://haiiro.moe/~cakes/about",
	},
	twitter: {
		...rootMeta.twitter,
		card: "summary_large_image",
		title: "~cakes - about",
		description: "Hello who dis?",
		site: "https://haiiro.moe/~cakes/about",
	},
};

export default function AboutPage() {
	return (
		<main className="flex flex-col mx-auto w-full page-transition blog page-root">
			<Container asSection bgVariant margin={48} blob>
				<h1 className="font-serif font-extralight text-6xl lg:text-8xl">
					So. <span className="text-gradient">Who am I?</span>
				</h1>
				<div className="mx-3">
					<p className="mt-4 max-w-lg text-xl lg:text-2xl">
						These will be on the test later, so pay attention!{" "}
						<em>(Or don&apos;t, who am I to tell you)</em>
					</p>
				</div>
			</Container>
			<Container asSection>
				<h1
					className="my-4 font-serif font-light text-4xl lg:text-6xl"
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
							(1000 * 60 * 60 * 24 * 365.25),
					)}
					-year-old computer science student. I made this site because
					I wanted my own little space on the web. It&apos;s so
					incredibly boring to see so many websites that are just the
					same two colors with an algorithm that controls everything
					you see and hear. I absolutely love making stuff, so I
					thought... why not just make stuff <em>and</em> share it
					with the world?
				</p>
				<p className="my-4">
					The fact that this is the internet now is kind of... I
					don&apos;t know, unsettling...? Concerning? It&apos;s not
					like I&apos;m completely against AI and all this, but come
					on, we can do so much better than just completely replace
					the human touch.{" "}
					<span className="text-xs text-base-300">
						written using github copilot (/s)
					</span>
				</p>
				<p className="my-4">
					Long story short, me and social media do not go well
					together, and I wanted to make a space just for myself, so I
					made this site. The previous version was made using pure
					HTML and CSS using a custom build system (
					<RouterLink
						href="https://github.com/Kex1016/haiiro"
						className="link link-primary"
					>
						that I have right here
						<ExternalLink className="inline ml-1" size={10} />
					</RouterLink>
					). I always wanted to make something using Next.js, and the
					previous version was a little bit clunky, so I straight up
					remade the whole thing using{" "}
					<RouterLink
						href="https://nextjs.org"
						className="link link-primary"
						target="blank"
					>
						Next.js
						<ExternalLink className="inline ml-1" size={10} />
					</RouterLink>
					,{" "}
					<RouterLink
						href="https://reactjs.org"
						className="link link-primary"
						target="blank"
					>
						React
						<ExternalLink className="inline ml-1" size={10} />
					</RouterLink>
					,{" "}
					<RouterLink
						href="https://tailwindcss.com"
						className="link link-primary"
						target="blank"
					>
						Tailwind CSS
						<ExternalLink className="inline ml-1" size={10} />
					</RouterLink>{" "}
					and{" "}
					<RouterLink
						href="https://daisyui.com"
						className="link link-primary"
						target="blank"
					>
						DaisyUI
						<ExternalLink className="inline ml-1" size={10} />
					</RouterLink>
					. Now that I have a properly made identity for this site, I
					hope to make even more cool stuff with it!{" "}
					<em>
						The entire development process is documented in the{" "}
						<RouterLink
							href="https://github.com/haiiro-moe/cakes"
							className="link link-primary"
							target="_blank"
						>
							GitHub repository
							<ExternalLink className="inline ml-1" size={10} />
						</RouterLink>
						!
					</em>
				</p>
				<p>
					I love challenges. Figuring things out has to be one of my
					favorite things about programming. That feeling when you
					solve a problem that you have been stuck on for hours is
					just so incredibly satisfying. Learning new ways of doing
					things or new languages is also up there on the list. I just
					like making stuff.
				</p>
				<h1
					className="my-4 font-serif font-light text-4xl lg:text-6xl"
					id="why-cakes"
				>
					Why <span className="text-gradient">cakes</span>?
				</h1>
				<p className="my-4">
					This was a question a bunch of people asked me, so I will
					write it at the top. One of my first actual online nicknames
					was &quot;Kex1016&quot;, which pretty much just meant
					&quot;keksz&quot; in Hungarian, or &quot;biscuit&quot; in
					English. Because I like them. Then, someone started calling
					me &quot;cakes&quot; on Discord, because it sounds almost
					the same. I thought it was pretty funny, so when I finally
					decided to change my nickname on AniList to something else,
					I just went with &quot;cakes&quot;. I did not expect it to
					be free to take.
				</p>
				<h1 className="my-4 font-serif font-light text-4xl lg:text-6xl">
					What do I <span className="text-gradient">like</span>?
				</h1>
				<p className="my-4">
					I think it&apos;s pretty obvious that I like programming,
					and animanga. I also really like reading and playing all
					sorts of games. My taste in latter two is veery broad, but I
					tend to gravitate towards chill stuff. In terms of games, I
					love playing all sorts of indie games, mostly roguelikes,
					RPGs and shooter games. I also play League of Legends, but
					only if I have someone to play with...
				</p>
				<p>
					I LOVE MUSIC. I listen to <em>everything</em>. And I mean
					it. Classical, metal, lo-fi, tons and tons of electronic
					music, rap, pop, rock, you name it. Some standout artists
					for me are:
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
								link: "https://compllege.bandcamp.com/",
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
								className="flex hover:bg-base-300 p-0 transition duration-200 ease-in-out list-row"
							>
								<RouterLink
									href={artist.link}
									className="flex items-center p-3 w-full h-full"
									target="_blank"
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
				<h1 className="my-4 font-serif font-light text-4xl lg:text-6xl">
					Some more <span className="text-gradient">links</span>,
					please!
				</h1>
				<div className="links_outer">
					<div className="flex flex-wrap gap-3 mt-4 links_inner">
						<SocialLink
							href="https://github.com/Kex1016"
							icon={
								<GitHub className="fill-current w-6 h-6 text-base-content" />
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
								<AniList className="fill-current w-6 h-6 text-base-content" />
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
								<Discord className="fill-current w-6 h-6 text-base-content" />
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
						<SocialLink
							href="https://keyoxide.org/BF756D384A813CF88F7C174224AF2B1C2F9A977D"
							icon={
								<Fingerprint className="fill-current w-6 h-6 text-base-content" />
							}
							title={
								<>
									Keyoxide:{" "}
									<span className="bg-base-200 px-2 border border-base-300 rounded-sm font-mono">
										24AF 2B1C 2F9A 977D
									</span>
								</>
							}
							description="Some crypto keys."
						/>
					</div>
				</div>
			</Container>
			<Container asSection bgVariant>
				<RandomQuote />
			</Container>
		</main>
	);
}
