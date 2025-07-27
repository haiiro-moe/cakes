import { getFeed } from "../feed/route";

export async function GET() {
	const feed = getFeed();

	const feedFile = feed.atom1();

	return new Response(feedFile, {
		headers: { "Content-Type": "application/atom+xml" },
	});
}
