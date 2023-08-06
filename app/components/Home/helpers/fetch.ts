import { ProductProps } from "@/components/app/types/product";

export const getCrepesData = async (): Promise<ProductProps[]> => {
	const res = await fetch("http://localhost:3000/api/crepes", {
		next: { revalidate: 60 },
	});
	return await res.json();
};

export const getFrappesData = async (): Promise<ProductProps[]> => {
	const res = await fetch("http://localhost:3000/api/frappes", {
		next: { revalidate: 60 },
	});
	return await res.json();
};
