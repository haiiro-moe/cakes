export default function Background() {
	return (
		<>
			<div
				// I found the noise image somewhere. I don't remember anymore.
				style={{ background: "url(/~cakes/noise.png)" }}
				className="absolute inset-0 bg-[size:180px] bg-repeat opacity-[0.025] -mt-[250px] pointer-events-none [z-index:-1]"
			></div>
			<svg
				aria-hidden="true"
				className="absolute inset-0 opacity-20 fill-black stroke-accent/50 -mt-[250px] w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,_#ffffff70,_transparent)] [z-index:-1]"
			>
				<defs>
					<pattern
						id="bg-grid"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
						x="-1"
						y="-1"
					>
						<path
							d="M.5 20V.5H20"
							fill="none"
							strokeDasharray="0"
						></path>
					</pattern>
				</defs>
				<rect
					width="100%"
					height="100%"
					strokeWidth="0"
					fill="url(#bg-grid)"
				></rect>
			</svg>
		</>
	);
}
