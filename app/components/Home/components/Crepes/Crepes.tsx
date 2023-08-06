import Product from "@/components/app/components/Product";
import { getCrepesData } from "../../helpers/fetch";

export default async function Crepes() {
	const crepes = await getCrepesData();

	return (
		<div className="flex flex-wrap gap-8 justify-center my-6">
			{crepes.map((crepe) => (
				<Product {...crepe} key={crepe.id} />
			))}
		</div>
	);
}
