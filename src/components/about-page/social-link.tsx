import RouterLink from "../router-link";

export default function SocialLink({
	href,
	icon,
	title,
	description,
	copy = false,
	copyMessage,
}: {
	href: string;
	icon: React.ReactNode;
	title: React.ReactNode;
	description: string;
	copy?: boolean;
	copyMessage?: string;
}) {
	return (
		<RouterLink
			href={href}
			target="_blank"
			className="flex items-center gap-4 text-left btn btn-ghost btn-lg"
			copy={copy}
			copyMessage={copyMessage}
		>
			<div>{icon}</div>
			<div>
				<div className="text-sm">{title}</div>
				<div className="opacity-60 font-semibold text-xs uppercase">
					{description}
				</div>
			</div>
		</RouterLink>
	);
}
