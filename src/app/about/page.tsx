import SocialLink from "@/components/about-page/social-link";
import Container from "@/components/container";
import RandomQuote from "@/components/home-page/random-quote";
import RouterLink from "@/components/router-link";
import { ExternalLink } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export async function generateMetadata(
	parent: ResolvingMetadata
): Promise<Metadata> {
	const parentMeta = await parent;
	return {
		...(parentMeta as Metadata),
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
			site: "https://haiiro.moe/~cakes/about",
		},
	};
}

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
							(1000 * 60 * 60 * 24 * 365.25)
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
						<SocialLink
							href="https://keyoxide.org/BF756D384A813CF88F7C174224AF2B1C2F9A977D"
							icon={
								<svg
									className="fill-current w-6 h-6 text-base-content"
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>monkey tie</title>
									<path d="M12.002 0C9.79 0 7.575.71 5.722 2.127a.472.472 0 00-.093.658.46.46 0 00.654.093 9.404 9.404 0 0111.44 0c.202.16.5.116.653-.093a.474.474 0 00-.093-.658A10.323 10.323 0 0012.003 0zm.03 3.11a11.947 11.947 0 00-5.966 1.608 13.784 13.784 0 00-4.83 4.747c-.303.536.444 1.021.8.497a12.816 12.816 0 014.494-4.43 11.015 11.015 0 015.5-1.481c1.905.003 3.78.507 5.432 1.462 1.71.977 3.26 2.457 4.503 4.45a.46.46 0 00.414.23.46.46 0 00.4-.252.461.461 0 00-.022-.474v-.002c-1.31-2.12-2.982-3.71-4.834-4.77A11.795 11.795 0 0012.03 3.11zM12 6.164a9.27 9.27 0 00-3.71.73c-1.643.706-2.97 1.88-4.064 3.343-1.096 1.46-1.97 3.213-2.73 5.102a.474.474 0 00.262.612c.375.134.552-.144.6-.267.985-2.46 2.16-4.624 3.697-6.14a8.28 8.28 0 012.6-1.784 8.415 8.415 0 013.34-.648 9.51 9.51 0 012.98.447 7.345 7.345 0 013.39 2.25c.898 1.057 1.557 2.423 1.917 4.09.172.83.255 1.675.255 2.524a9.204 9.204 0 01-.17 1.837.47.47 0 00.355.556.472.472 0 00.558-.36c.134-.67.2-1.351.19-2.033 0-.916-.09-1.827-.272-2.722a11.155 11.155 0 00-1.207-3.2 8.394 8.394 0 00-3.288-3.232c-1.358-.731-2.95-1.104-4.7-1.104zm.102 3.076a7.51 7.51 0 00-2.214.3 5.317 5.317 0 00-1.45.7 6.552 6.552 0 00-1.787 1.906c-.702 1.093-1.19 2.33-1.698 3.479a17.31 17.31 0 01-.793 1.626c-.27.478-.594.92-.964 1.314-.418.459.216 1.094.665.662v.002c.763-.78 1.28-1.754 1.75-2.776.348-.76.664-1.541 1.007-2.277.247-.543.53-1.065.846-1.567A5.4 5.4 0 019.2 10.865c.718-.425 1.603-.685 2.802-.685a5.82 5.82 0 012.565.538c.518.25.986.59 1.385 1.003.6.633 1.05 1.395 1.322 2.226a8.63 8.63 0 01.438 2.776c-.002.98-.145 1.955-.425 2.895a8.869 8.869 0 01-1.21 2.563.472.472 0 00.122.65.465.465 0 00.646-.11 9.887 9.887 0 001.34-2.836c.3-1.024.458-2.09.46-3.157a9.76 9.76 0 00-.385-2.753c-.39-1.317-1.084-2.5-2.128-3.363a5.768 5.768 0 00-1.824-1.008 7.525 7.525 0 00-2.204-.364zm-.094 3.083c-.726.01-1.425.27-1.986.73a3.712 3.712 0 00-1.23 1.779c-.116.358-.185.749-.283 1.189a8.902 8.902 0 01-.782 2.249c-.438.838-1.11 1.757-2.22 2.72a.474.474 0 00-.052.66c.168.198.465.22.66.05.7-.6 1.32-1.285 1.846-2.038a8.727 8.727 0 001.266-2.705c.11-.393.187-.754.254-1.065a8.48 8.48 0 01.19-.777c.168-.525.49-.988.922-1.33a2.264 2.264 0 011.405-.522c.31.005.617.077.898.213.458.23.84.57 1.12.996.282.414.44.9.45 1.402.02 1.09-.11 2.18-.397 3.234a9.355 9.355 0 01-2.403 4.09c-.18.186-.18.48.002.665.272.242.566.113.662-.005a10.309 10.309 0 002.642-4.495 12.48 12.48 0 00.438-3.49 3.37 3.37 0 00-.284-1.327 3.843 3.843 0 00-1.245-1.567 3.125 3.125 0 00-1.873-.656zm-.015 3.08a.468.468 0 00-.466.47h.002a7.5 7.5 0 01-.244 1.972 7.319 7.319 0 01-1.163 2.395c-.61.819-1.27 1.59-1.994 2.308a.474.474 0 00.015.667.468.468 0 00.662-.016c1.05-1.096 1.958-2.1 2.622-3.252a7.46 7.46 0 00.76-1.868c.186-.72.282-1.461.274-2.205a.47.47 0 00-.468-.47z" />
								</svg>
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
