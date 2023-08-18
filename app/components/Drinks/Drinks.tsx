import { getDrinks } from "../Home/helpers/fetch";
import OtherDrink from "./Drink";

export default async function Drinks() {
	const drinks = await getDrinks();

	return (
		<div className="flex flex-wrap gap-4 justify-center my-4 max-h-full overflow-scroll">
			{drinks.map((drink) => (
				<OtherDrink {...drink} key={drink.id} />
			))}
		</div>
	);
}
