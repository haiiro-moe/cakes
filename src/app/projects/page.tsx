import Container from "@/components/container";

export default function ProjectsPage() {
	return (
		<main className="flex flex-col mx-auto w-full page-transition blog page-root">
			<Container asSection bgVariant margin={48} blob>
				<h1 className="font-serif text-8xl">Projects</h1>
				<div className="mx-3">
					<p className="mt-4 max-w-lg text-2xl">
						Here are the most recent projects I have worked on.
					</p>
				</div>
			</Container>
		</main>
	);
}
