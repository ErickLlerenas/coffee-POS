import { getFrappesData } from "../Home/helpers/fetch";
import Frappe from "./Frappe";

export default async function Frappes() {
  const frappes = await getFrappesData();

  return (
    <div className="flex flex-wrap gap-4 justify-center my-4 max-h-full overflow-scroll">
      {frappes.map((product) => (
        <Frappe {...product} key={product.id} />
      ))}
    </div>
  );
}
