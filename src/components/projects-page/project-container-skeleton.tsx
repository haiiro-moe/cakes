export default function ProjectContainerSkeleton() {
	return (
		<div className="bg-base-200 hover:bg-base-300 shadow-md border border-base-300 transition-all duration-200 ease-in-out card card-side">
			<div className="bg-base-300 w-1/3 aspect-square animate-pulse"></div>
			<div className="card-body">
				<div className="flex flex-col gap-4 animate-pulse">
					<div className="bg-base-300 rounded-full w-1/2 h-6"></div>
					<div className="bg-base-300 rounded-full w-1/3 h-4"></div>
					<div className="bg-base-300 rounded-full w-1/4 h-4"></div>
					{/* Button */}
					<div className="card-actions">
						<div className="bg-base-300 w-1/4 h-8"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
