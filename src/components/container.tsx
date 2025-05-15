export default function Container({
	children,
	margin = 16,
	bgVariant = false,
	asSection = false,
	blob = false,
	textAlign = "left",
	relative = false,
}: {
	children: React.ReactNode;
	margin?: 16 | 48;
	bgVariant?: boolean;
	asSection?: boolean;
	blob?: boolean;
	textAlign?: "left" | "center" | "right";
	relative?: boolean;
}) {
	const marginClass = `mt-${margin} pb-16`;
	const textAlignClass = `text-${textAlign}`;
	const blobClass = blob ? "blob" : "";
	const relativeClass = relative ? "relative" : "";

	if (bgVariant) {
		if (asSection) {
			return (
				<section
					className={`flex flex-col border-b border-base-300 w-full ${blobClass}`}
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
				className={`flex flex-col border-b border-base-300 w-full ${blobClass}`}
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
				className={`flex flex-col bg-base-100 border-b border-base-300 w-full ${blobClass}`}
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
			className={`flex flex-col bg-base-100 border-b border-base-300 w-full ${blobClass}`}
		>
			<div
				className={`mx-auto max-w-7xl container ${marginClass} ${textAlignClass} ${relativeClass}`}
			>
				{children}
			</div>
		</div>
	);
}
