"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PathProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	useEffect(() => {
		// Set the html data attribute to the current pathname
		document.documentElement.setAttribute("data-page", pathname);
	}, [pathname]);
	return children;
}
