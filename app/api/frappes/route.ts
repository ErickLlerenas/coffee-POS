import { FRAPPES } from "./constants";

export async function GET(request: Request) {
  return new Response(JSON.stringify(FRAPPES));
}
