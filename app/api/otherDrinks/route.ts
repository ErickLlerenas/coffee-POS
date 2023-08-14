import { OTHER_DRINKS } from "./constants";

export async function GET(request: Request) {
  return new Response(JSON.stringify(OTHER_DRINKS));
}
