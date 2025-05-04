"use client";

import Link from "next/link";
import ThemeProvider from "./theme-provider";
import { MouseEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const handleRouting = (
	event: MouseEvent<HTMLAnchorElement>,
	href: string,
	router: AppRouterInstance
) => {
	event.preventDefault();
	const page = document.querySelector(".page-root");
	if (page) {
		console.log("page", page);

		page.classList.add("page-detransition");
	}
	setTimeout(() => {
		router.push(href);
		if (page) {
			page.classList.remove("page-detransition");
		}
	}, 150);
};

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
	const router = useRouter();

	return (
		<li>
			<Link
				href={href}
				onClick={(e) => handleRouting(e, href, router)}
				className={
					"w-full" +
					(indicator ? " indicator" : "") +
					(active ? " active" : "")
				}
			>
				{indicator && (
					<span className="px-1 text-xs indicator-middle indicator-item badge badge-primary">
						{indicator}
					</span>
				)}
				{children}
			</Link>
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
	const router = useRouter();

	return (
		<Link
			href={href}
			onClick={(e) => handleRouting(e, href, router)}
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
		</Link>
	);
};

export default function Navbar() {
	const pathname = usePathname();

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
				"top-0 left-0 z-50 fixed px-32 w-full transition-all duration-300 ease-in-out" +
				(isOnTop ? "" : " p-5")
			}
		>
			<div
				className={
					"absolute h-5 top-0 left-0 backdrop-blur-sm w-full" +
					(isOnTop ? " hidden" : " block")
				}
			></div>
			<div
				className={
					"navbar flex justify-between items-center transition-all duration-300 ease-in-out" +
					(isOnTop
						? " bg-base-100/0 shadow-none border border-transparent"
						: " bg-base-100/50 backdrop-blur-lg border border-base-300/50 shadow-sm")
				}
			>
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
							className="z-1 bg-base-100/50 shadow mt-3 p-2 w-52 menu menu-sm dropdown-content"
						>
							<NavLinkMobile href="/" active={pathname == "/"}>
								Home
							</NavLinkMobile>
							<NavLinkMobile
								href="/blog"
								indicator={1}
								active={pathname == "/blog"}
							>
								Blog
							</NavLinkMobile>
							<NavLinkMobile
								href="/about"
								active={pathname == "/about"}
							>
								About
							</NavLinkMobile>
							<NavLinkMobile
								href="/projects"
								active={pathname == "/projects"}
							>
								Projects
							</NavLinkMobile>
						</ul>
					</div>
					<div className="hidden lg:block join">
						<NavLink href="/" active={pathname == "/"}>
							Home
						</NavLink>
						<NavLink
							href="/blog"
							indicator={1}
							active={pathname == "/blog"}
						>
							Blog
						</NavLink>
						<NavLink href="/about" active={pathname == "/about"}>
							About
						</NavLink>
						<NavLink
							href="/projects"
							active={pathname == "/projects"}
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
