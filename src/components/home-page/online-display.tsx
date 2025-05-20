"use client";

import Image from "next/image";
import useSWR from "swr";
type User = {
	data: {
		active_on_discord_mobile: boolean;
		active_on_discord_desktop: boolean;
		listening_to_spotify: boolean;
		kv: {
			location: string;
		};
		spotify: {
			track_id: string;
			timestamps: {
				start: number;
				end: number;
			};
			song: string;
			artist: string;
			album_art_url: string;
			album: string;
		};
		discord_user: {
			username: string;
			public_flags: number;
			id: string;
			discriminator: string;
			avatar: string;
		};
		discord_status: string;
		activities: {
			type: number;
			timestamps: {
				start: number;
				end: number;
			};
			sync_id: string;
			state: string;
			session_id: string;
			party: {
				id: string;
			};
			name: string;
			id: string;
			flags: number;
			details: string;
			created_at: number;
			assets: {
				large_text: string;
				large_image: string;
				small_text: string;
				small_image: string;
			};
			application_id: string;
		}[];
	};
};

function fetcher(url: string) {
	return fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Network response was not ok");
			}
			const data = res.json();
			return data as Promise<User>;
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
			throw error;
		});
}

export default function OnlineDisplay() {
	const { data, error, isLoading } = useSWR(
		"https://api.lanyard.rest/v1/users/147709526357966848",
		fetcher
	);

	if (error || isLoading) {
		return (
			<div className="hidden lg:block -top-[1.25ch] -right-[1ch] absolute arrow">
				<div className="inline-block font-drawing text-xl tracking-wide rotate-12">
					I&apos;m <span className="text-secondary">offline</span>!
				</div>
			</div>
		);
	}

	const statusMap = {
		online: "text-success",
		idle: "text-warning",
		dnd: "text-error",
		offline: "text-secondary",
	};

	return (
		<div className="group hidden lg:block -top-[1.25ch] -right-[1ch] box-content absolute">
			{/* Status on hover */}
			<div className="-top-0 right-2 absolute flex bg-base-100/50 opacity-0 group-hover:opacity-100 p-2 w-max font-sans transition-all duration-300 ease-in-out">
				<Image
					src={
						data?.data.discord_user.avatar
							? `https://cdn.discordapp.com/avatars/${data?.data.discord_user.id}/${data?.data.discord_user.avatar}.png`
							: "/unknown_user.jpg"
					}
					alt={`${data?.data.discord_user.username}'s avatar`}
					width={32}
					height={32}
					className="mr-2"
				/>
				<div className="flex flex-col">
					<span className="font-bold text-sm">
						{data?.data.discord_user.username}
					</span>
					<span className="text-xs">
						{/* Activity */}
						{data?.data.activities[0]?.type === 3 ? (
							<span>
								Listening to{" "}
								<a
									href={`https://open.spotify.com/track/${data?.data.spotify.track_id}`}
									className="text-primary"
								>
									{data?.data.spotify.song}
								</a>{" "}
								by {data?.data.spotify.artist}
							</span>
						) : data?.data.activities[0]?.type === 4 ? (
							<span>Streaming</span>
						) : data?.data.activities[0]?.type === 5 ? (
							<span>Listening to Spotify</span>
						) : (
							<span>{data?.data.activities[0]?.details}</span>
						)}
						{/* If no activity is present */}
						{!data?.data.activities[0] && (
							<span>Not doing anything</span>
						)}
					</span>
				</div>
				{/* Arrow pointing down */}
				<div className="right-0 -bottom-2 absolute border-t-[8px] border-t-base-100/50 border-r-[8px] border-r-transparent border-l-[8px] border-l-transparent w-0 h-0"></div>
			</div>
			{/* Text */}
			<div className="inline-block font-drawing text-xl tracking-wide rotate-12">
				I&apos;m{" "}
				<span
					className={`${
						statusMap[
							data?.data.discord_status as keyof typeof statusMap
						]
					}`}
				>
					{data?.data.discord_status !== "offline"
						? "online"
						: "offline"}
				</span>
				!
			</div>
		</div>
	);
}
