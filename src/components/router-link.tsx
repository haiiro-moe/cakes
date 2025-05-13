"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { showToast } from "./toast-provider";

const handleRouting = (
	event: MouseEvent<HTMLAnchorElement>,
	href: string,
	router: AppRouterInstance,
	target: string,
	copy: boolean,
	copyMessage: string
) => {
	if (target !== "_self" && !copy) {
		// If the target is not _self, we dont need to do anything, just let the built-in link object handle it
		return;
	}
	event.preventDefault();
	if (copy) {
		// If the link is a copy link, we need to copy the link to the clipboard
		navigator.clipboard.writeText(href);
		showToast(copyMessage, {
			type: "success",
			duration: 5000,
		});
		return;
	}

	const page = document.querySelector(".page-root");
	if (page) {
		// Get the current page name and test if it is the same as the place we are going
		const currentPage = document.documentElement.getAttribute("data-page");
		console.log("currentPage", currentPage);
		console.log("href", href);

		if (currentPage === href) {
			console.log("Same page, no need to navigate");
			// If it is the same, we don't need to do anything
			return;
		}
		page.classList.add("page-detransition");
		setTimeout(() => {
			router.push(href);
		}, 150);
	}
};

export default function RouterLink({
	href,
	children,
	className,
	target = "_self",
	rel = "noopener noreferrer",
	copy = false,
	copyMessage = "Link copied to clipboard",
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
	target?: string;
	rel?: string;
	copy?: boolean;
	copyMessage?: string;
}) {
	const router = useRouter();

	return (
		<Link
			href={href}
			onClick={(e) =>
				handleRouting(e, href, router, target, copy, copyMessage)
			}
			className={className}
			target={target}
			rel={rel}
		>
			{children}
		</Link>
	);
}
