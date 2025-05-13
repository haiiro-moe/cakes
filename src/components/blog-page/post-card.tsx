import { Post } from "./get-posts";
import RouterLink from "../router-link";

export default function PostCard({ post }: { post: Post }) {
	return (
		<RouterLink
			href={`/blog/${post.slug}`}
			className={
				"bg-base-200 shadow-xl min-w-[200px] text-base-content scale-100 hover:scale-105 " +
				"transition-transform duration-200 ease-in-out cursor-pointer card h-fit blog-card"
			}
		>
			<div className="card-body">
				<div className="text-xs date">
					{new Date(post.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</div>
				<h2
					className={
						"flex-col items-start gap-0 card-title" +
						(post.tags ? " mb-2" : "")
					}
				>
					<span>{post.title}</span>
					<span className="flex flex-wrap gap-2">
						{post.tags &&
							post.tags.map((tag) => (
								<div
									key={tag}
									className="text-xs transition-all duration-150 badge badge-primary"
								>
									{tag}
								</div>
							))}
					</span>
				</h2>
				<p>{post.description}</p>
			</div>
		</RouterLink>
	);
}
