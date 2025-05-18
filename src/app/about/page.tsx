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
			<Container asSection bgVariant margin={48} blob>
				<h1 className="font-serif font-extralight text-8xl">
					So. <span className="text-gradient">Who am I?</span>
				</h1>
				<div className="mx-3">
					<p className="mt-4 max-w-lg text-2xl">
						These will be on the test later, so pay attention!{" "}
						<em>(Or don&apos;t, who am I to tell you)</em>
					</p>
				</div>
			</Container>
			<Container asSection>
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
					className="my-4 font-serif font-light text-6xl"
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
				<h1 className="my-4 font-serif font-light text-6xl">
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
						<SocialLink
							href="https://keybase.io/cakebase"
							icon={
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-current w-6 h-6 text-base-content"
								>
									<title>Keybase</title>
									<path d="M10.445 21.372a.953.953 0 1 1-.955-.954c.524 0 .951.43.951.955m5.923-.001a.953.953 0 1 1-.958-.954c.526 0 .954.43.954.955m4.544-9.16l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.06-.094-.113-.141-.169-.104-.12-.21-.239-.32-.359l-.075-.08-.091-.099-.135-.13c-.015-.019-.032-.035-.05-.054a10.87 10.87 0 0 0-3.955-2.504l-.23-.078.035-.083a4.109 4.109 0 0 0-.12-3.255 4.11 4.11 0 0 0-2.438-2.16c-.656-.216-1.23-.319-1.712-.305-.033-.105-.1-.577.496-1.848L10.662 0l-.287.399c-.33.455-.648.895-.945 1.328a1.857 1.857 0 0 0-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003a1.876 1.876 0 0 0 1.755 1.98l1.002.06c-.065.84.073 1.62.405 2.306a11.28 11.28 0 0 0-3.66 2.484C.912 14.392.912 18.052.912 20.995v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06a9.197 9.197 0 0 1-1.68-3.848l1.913-2.03-.985 3.09 1.74-1.267c3.075-2.234 6.745-2.75 10.91-1.53 1.806.533 3.56.04 4.474-1.256l.104-.165c.09.498.14.998.14 1.496 0 1.563-.254 3.687-1.38 5.512h1.612c.776-1.563 1.181-3.432 1.181-5.512-.001-2.2-.786-4.421-2.184-6.274zM8.894 6.192c.122-1.002.577-1.949 1.23-2.97a1.36 1.36 0 0 0 1.283.749c.216-.008.604.025 1.233.232a2.706 2.706 0 0 1 1.608 1.425c.322.681.349 1.442.079 2.15a2.69 2.69 0 0 1-.806 1.108l-.408-.502-.002-.003a1.468 1.468 0 0 0-2.06-.205c-.334.27-.514.66-.534 1.058-1.2-.54-1.8-1.643-1.628-3.04zm4.304 5.11l-.52.425a.228.228 0 0 1-.323-.032l-.11-.135a.238.238 0 0 1 .034-.334l.51-.42-1.056-1.299a.307.307 0 0 1 .044-.436.303.303 0 0 1 .435.041l2.963 3.646a.309.309 0 0 1-.168.499.315.315 0 0 1-.31-.104l-.295-.365-1.045.854a.244.244 0 0 1-.154.055.237.237 0 0 1-.186-.09l-.477-.58a.24.24 0 0 1 .035-.335l1.05-.858-.425-.533zM7.752 4.866l-1.196-.075a.463.463 0 0 1-.435-.488l.09-1.4a.462.462 0 0 1 .461-.437h.024l1.401.091a.459.459 0 0 1 .433.488l-.007.101a9.27 9.27 0 0 0-.773 1.72zm12.525 11.482c-.565.805-1.687 1.08-2.924.718-3.886-1.141-7.397-.903-10.469.7l1.636-5.122-5.29 5.609c.098-3.762 2.452-6.967 5.757-8.312.471.373 1.034.66 1.673.841.16.044.322.074.48.102a1.41 1.41 0 0 0 .21 1.408l.075.09c-.172.45-.105.975.221 1.374l.476.582a1.39 1.39 0 0 0 1.079.513c.32 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113a1.45 1.45 0 0 0 .928-.326c.623-.51.72-1.435.209-2.06l-1.67-2.057a4.07 4.07 0 0 0 .408-.38c.135.036.27.077.4.12.266.096.533.197.795.314a9.55 9.55 0 0 1 2.77 1.897c.03.03.06.055.086.083l.17.176c.038.039.076.079.11.12.08.085.16.175.24.267l.126.15c.045.053.086.104.13.16l.114.15c.04.05.079.102.117.154.838 1.149.987 2.329.404 3.157v.005zM7.718 4.115l-.835-.05.053-.836.834.051z" />
								</svg>
							}
							title={
								<>
									Keybase:{" "}
									<span className="bg-base-200 px-2 border border-base-300 rounded-sm font-mono">
										cakebase
									</span>
								</>
							}
							description="I have a Keybase too of course."
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
