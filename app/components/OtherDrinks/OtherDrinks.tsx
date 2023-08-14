import { getOtherDrinksData } from "../Home/helpers/fetch";
import OtherDrink from "./OtherDrink";

export default async function OtherDrinks() {
  const drinks = await getOtherDrinksData();

  return (
    <div className="flex flex-wrap gap-4 justify-center my-4 max-h-full overflow-scroll">
      {drinks.map((drink) => (
        <OtherDrink {...drink} key={drink.id} />
      ))}
    </div>
  );
}
