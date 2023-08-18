import {
	CrepeProps,
	FrappeProps,
	DrinkProps,
} from "@/components/app/types/product";

let hostname = process.env.PRODUCTION_URL;

if (process.env.NODE_ENV === "development") {
	hostname = process.env.LOCAL_URL;
}

export const getCrepes = async (): Promise<CrepeProps[]> => {
	const res = await fetch(`${hostname}/api/crepes`, { cache: "no-store" });

	if (!res.ok) {
		return [];
	}

	return await res.json();
};

export const getFrappes = async (): Promise<FrappeProps[]> => {
	const res = await fetch(`${hostname}/api/frappes`, { cache: "no-store" });
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const getDrinks = async (): Promise<DrinkProps[]> => {
	const res = await fetch(`${hostname}/api/drinks`, {
		cache: "no-store",
	});

	if (!res.ok) {
		return [];
	}

	return await res.json();
};
