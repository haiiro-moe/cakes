export default function Container({
	children,
	margin = 16,
	bgVariant = false,
	asSection = false,
	blob = false,
	textAlign = "left",
	relative = false,
	outerRelative = false,
}: {
	children: React.ReactNode;
	margin?: 16 | 40 | 48;
	bgVariant?: boolean;
	asSection?: boolean;
	blob?: boolean;
	textAlign?: "left" | "center" | "right";
	relative?: boolean;
	outerRelative?: boolean;
}) {
	let marginClass = "";
	switch (margin) {
		case 16:
			marginClass = "mt-16 pb-16";
			break;
		case 40:
			marginClass = "mt-24 lg:mt-40 pb-16";
			break;
		case 48:
			marginClass = "mt-28 lg:mt-48 pb-16";
			break;
		default:
			marginClass = "mt-16 pb-16";
	}

	const textAlignClass = `text-${textAlign}`;
	const blobClass = blob ? "blob" : "";
	const relativeClass = relative ? "relative" : "";
	const outerRelativeClass = outerRelative ? "relative" : "";

	if (bgVariant) {
		if (asSection) {
			return (
				<section
					className={`flex flex-col border-b border-base-300 w-full ${blobClass} ${outerRelativeClass}`}
				>
					<div
						className={`mx-auto max-w-7xl container ${marginClass} ${textAlignClass} ${relativeClass}`}
					>
						{children}
					</div>
				</section>
			);
		}

		return (
			<div
				className={`flex flex-col border-b border-base-300 w-full ${blobClass} ${outerRelativeClass}`}
			>
				<div
					className={`mx-auto max-w-7xl container ${marginClass} ${textAlignClass} ${relativeClass}`}
				>
					{children}
				</div>
			</div>
		);
	}

	if (asSection) {
		return (
			<section
				className={`flex flex-col bg-base-100 border-b border-base-300 w-full ${blobClass} ${outerRelativeClass}`}
			>
				<div
					className={`mx-auto max-w-7xl container ${marginClass} ${textAlignClass} ${relativeClass}`}
				>
					{children}
				</div>
			</section>
		);
	}

	return (
		<div
			className={`flex flex-col bg-base-100 border-b border-base-300 w-full ${blobClass} ${outerRelativeClass}`}
		>
			<div
				className={`mx-auto max-w-7xl container ${marginClass} ${textAlignClass} ${relativeClass}`}
			>
				{children}
			</div>
		</div>
	);
}
