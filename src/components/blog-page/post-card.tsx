import Link from "next/link";
import { Post } from "./get-posts";

export default function PostCard({ post }: { post: Post }) {
	return (
		<div className="bg-secondary shadow-xl min-w-[200px] text-secondary-content card">
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
								<Link
									key={tag}
									href={`/blog?tags=${tag}`}
									className="text-xs badge badge-primary"
								>
									{tag}
								</Link>
							))}
					</span>
				</h2>
				<p>{post.description}</p>
				<div className="justify-end card-actions">
					<a
						href={`/blog/${post.slug}`}
						className="btn btn-secondary"
					>
						Read more
					</a>
				</div>
			</div>
		</div>
	);
}
