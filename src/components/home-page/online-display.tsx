"use client";

import useSWR from "swr";
/* {
  "success": true,
  "data": {
    "active_on_discord_mobile": false,
    "active_on_discord_desktop": true,
    "listening_to_spotify": true,
    // Lanyard KV
    "kv": {
      "location": "Los Angeles, CA"
    },
    // Below is a custom crafted "spotify" object, which will be null if listening_to_spotify is false
    "spotify": {
      "track_id": "3kdlVcMVsSkbsUy8eQcBjI",
      "timestamps": {
        "start": 1615529820677,
        "end": 1615530068733
      },
      "song": "Let Go",
      "artist": "Ark Patrol; Veronika Redd",
      "album_art_url": "https://i.scdn.co/image/ab67616d0000b27364840995fe43bb2ec73a241d",
      "album": "Let Go"
    },
    "discord_user": {
      "username": "Phineas",
      "public_flags": 131584,
      "id": "94490510688792576",
      "discriminator": "0001",
      "avatar": "a_7484f82375f47a487f41650f36d30318"
    },
    "discord_status": "online",
    // activities contains the plain Discord activities array that gets sent down with presences
    "activities": [
      {
        "type": 2,
        "timestamps": {
          "start": 1615529820677,
          "end": 1615530068733
        },
        "sync_id": "3kdlVcMVsSkbsUy8eQcBjI",
        "state": "Ark Patrol; Veronika Redd",
        "session_id": "140ecdfb976bdbf29d4452d492e551c7",
        "party": {
          "id": "spotify:94490510688792576"
        },
        "name": "Spotify",
        "id": "spotify:1",
        "flags": 48,
        "details": "Let Go",
        "created_at": 1615529838051,
        "assets": {
          "large_text": "Let Go",
          "large_image": "spotify:ab67616d0000b27364840995fe43bb2ec73a241d"
        }
      },
      {
        "type": 0,
        "timestamps": {
          "start": 1615438153941
        },
        "state": "Workspace: lanyard",
        "name": "Visual Studio Code",
        "id": "66b84f5317e9de6c",
        "details": "Editing README.md",
        "created_at": 1615529838050,
        "assets": {
          "small_text": "Visual Studio Code",
          "small_image": "565945770067623946",
          "large_text": "Editing a MARKDOWN file",
          "large_image": "565945077491433494"
        },
        "application_id": "383226320970055681"
      }
    ]
  }
} */
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
					I&apos;m <span className="text-error">offline</span>!
				</div>
			</div>
		);
	}

	return (
		<div className="hidden lg:block -top-[1.25ch] -right-[1ch] absolute arrow">
			<div className="inline-block font-drawing text-xl tracking-wide rotate-12">
				I&apos;m{" "}
				<span className="text-success">
					{data?.data.discord_status}
				</span>
				!
			</div>
		</div>
	);
}
