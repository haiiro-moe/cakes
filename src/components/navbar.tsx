"use client";

import Link from "next/link";
import ThemeProvider from "./theme-provider";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { Post } from "./blog-page/get-posts";
import RouterLink from "./router-link";

const NavLinkMobile = ({
	href,
	children,
	indicator,
	active,
}: {
	href: string;
	children: React.ReactNode;
	indicator?: React.ReactNode;
	active?: boolean;
}) => {
	return (
		<li>
			<RouterLink
				href={href}
				className={
					"w-full" +
					(indicator ? " relative indicator" : "") +
					(active ? " active" : "")
				}
			>
				{indicator && (
					<span className="px-1 text-xs indicator-middle indicator-item badge badge-primary">
						{indicator}
					</span>
				)}
				{children}
			</RouterLink>
		</li>
	);
};

const NavLink = ({
	href,
	children,
	indicator,
	active,
}: {
	href: string;
	children: React.ReactNode;
	indicator?: React.ReactNode;
	active?: boolean;
}) => {
	return (
		<RouterLink
			href={href}
			className={
				"join-item btn hover:scale-105 transition-[scale]" +
				(indicator ? " indicator" : "") +
				(active ? " btn-primary" : "")
			}
		>
			{indicator && (
				<span
					className={`px-1 py-0 h-5 text-xs leading-none indicator-item badge ${
						active ? "badge-secondary" : "badge-primary"
					}`}
				>
					{indicator}
				</span>
			)}
			{children}
		</RouterLink>
	);
};

const fetcher = (url: string): Promise<Post[]> =>
	fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}
			if (res.status === 404) {
				throw new Error("No data found");
			}
			if (res.status === 500) {
				throw new Error("Server error");
			}
			return res.json();
		})
		.then((posts) => {
			if (!posts) {
				throw new Error("No data found");
			}

			// Get "seenPosts" from localStorage
			const seenPosts = localStorage.getItem("seenPosts");
			if (!seenPosts) {
				localStorage.setItem("seenPosts", JSON.stringify([]));
			}
			const seenPostsArray = JSON.parse(seenPosts || "[]");
			// Filter out posts that are already seen or are less than 4 months old
			const fourMonthsAgo = new Date();
			fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);
			posts = posts.filter((post: Post) => {
				const postDate = new Date(post.date);
				const isSeen = seenPostsArray.includes(post.slug);
				const isOld = postDate > fourMonthsAgo;
				return !isSeen && isOld;
			});

			return posts;
		});

export default function Navbar() {
	const pathname = usePathname();

	const { data: posts } = useSWR("/~cakes/api/blog/posts", (url) =>
		fetcher(url)
	);

	const [isOnTop, setIsOnTop] = useState(true);
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsOnTop(false);
		} else {
			setIsOnTop(true);
		}
	};

	useEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={
				"top-0 left-0 z-50 fixed lg:px-32 w-full" +
				(isOnTop ? "" : " lg:p-5")
			}
		>
			<div
				className={
					"navbar w-full flex justify-between items-center" +
					(isOnTop
						? " bg-base-100/0 shadow-none border border-transparent"
						: " bg-base-100/50 backdrop-blur-lg border border-base-300/50 shadow-sm")
				}
			>
				<div
					className={
						"absolute h-5 -top-[1.3rem] left-0 backdrop-blur-sm w-full hidden" +
						(isOnTop ? " lg:hidden" : " lg:block")
					}
				></div>
				<div className="navbar-start">
					<div className="lg:hidden block dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="square"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="-left-3 z-1 bg-base-100/50 shadow backdrop-blur-sm mt-3 p-2 border-b border-base-300 w-svh text-center menu menu-md dropdown-content"
						>
							<NavLinkMobile
								href="/"
								active={pathname.replace(/\/$/, "") == "/"}
							>
								Home
							</NavLinkMobile>
							<NavLinkMobile
								href="/blog"
								indicator={
									posts?.length === 0
										? undefined
										: posts?.length
								}
								active={pathname.replace(/\/$/, "") == "/blog"}
							>
								Blog
							</NavLinkMobile>
							<NavLinkMobile
								href="/about"
								active={pathname.replace(/\/$/, "") == "/about"}
							>
								About
							</NavLinkMobile>
							<NavLinkMobile
								href="/projects"
								active={
									pathname.replace(/\/$/, "") == "/projects"
								}
							>
								Projects
							</NavLinkMobile>
						</ul>
					</div>
					<div className="hidden lg:block join">
						<NavLink
							href="/"
							active={pathname.replace(/\/$/, "") == "/"}
						>
							Home
						</NavLink>
						<NavLink
							href="/blog"
							indicator={
								posts?.length === 0 ? undefined : posts?.length
							}
							active={pathname.replace(/\/$/, "") == "/blog"}
						>
							Blog
						</NavLink>
						<NavLink
							href="/about"
							active={pathname.replace(/\/$/, "") == "/about"}
						>
							About
						</NavLink>
						<NavLink
							href="/projects"
							active={pathname.replace(/\/$/, "") == "/projects"}
						>
							Projects
						</NavLink>
					</div>
				</div>
				<div className="navbar-center">
					<Link
						href="/"
						className="relative font-var-width-62 font-serif text-2xl btn btn-ghost"
					>
						<span className="font-normal rm">haiiro</span>
						<span className="absolute opacity-40 rotate-12 jp">
							灰色
						</span>
					</Link>
				</div>
				<div className="navbar-end">
					<ThemeProvider />
				</div>
			</div>
		</nav>
	);
}
