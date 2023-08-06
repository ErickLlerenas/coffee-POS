import Product from "@/components/app/components/Product";
import { getFrappesData } from "../../helpers/fetch";

export default async function Frappes() {
	const frappes = await getFrappesData();

	return (
		<div className="flex flex-wrap gap-8 justify-center  my-6">
			{frappes.map((product) => (
				<Product {...product} key={product.id} />
			))}
		</div>
	);
}
