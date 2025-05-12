import Link from "next/link";
import { Post } from "./get-posts";
import { useRouter } from "next/navigation";

export default function PostCard({ post }: { post: Post }) {
	const router = useRouter();

	return (
		<div
			className={
				"bg-base-200 shadow-xl min-w-[200px] text-base-content scale-100 hover:scale-105 " +
				"transition-transform duration-200 ease-in-out cursor-pointer card"
			}
			onClick={() => {
				router.push(`/blog/${post.slug}`);
			}}
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
								<Link
									key={tag}
									href={`/blog?tags=${tag}`}
									className="hover:text-accent text-xs transition-all duration-150 hover:bg-accent-content badge badge-primary"
									onClick={(e) => {
										e.stopPropagation();
										router.push(`/blog?tags=${tag}`);
									}}
								>
									{tag}
								</Link>
							))}
					</span>
				</h2>
				<p>{post.description}</p>
			</div>
		</div>
	);
}
