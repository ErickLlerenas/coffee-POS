import { DRINKS } from "./constants";

export async function GET(request: Request) {
	return new Response(JSON.stringify(DRINKS));
}
