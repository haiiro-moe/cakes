"use client";

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
		<div className="hidden lg:block -top-[1.25ch] -right-[1ch] absolute arrow">
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
