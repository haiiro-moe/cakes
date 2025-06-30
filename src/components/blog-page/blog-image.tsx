import Image from "next/image";

type Props = {
	src: string;
	alt: string;
	width: number;
	height: number;
	float?: "left" | "right";
	cover?: boolean; // Optional prop for cover image
};

export default function BlogImage({
	src,
	alt,
	float,
	width,
	height,
	cover,
}: Props) {
	// If the width is only a number, append 'px' to it
	if (width && !width.toString().match(/^\d+$/))
		throw new Error("lol bro u suck");
	if (height && !height.toString().match(/^\d+$/))
		throw new Error("lol bro u suck");

	const style: React.CSSProperties = {
		float: float || "none",
		width: width || "auto",
		height: height || "auto",
	};

	if (float) {
		style.float = float;
		style.margin = "0 10px 10px 0"; // Add margin for floated images
	}

	return (
		<Image
			width={width}
			height={height}
			src={src}
			alt={alt}
			style={style}
			className={"blog-image" + cover ? " object-cover" : ""}
		/>
	);
}
