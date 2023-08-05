import Product from "@/components/components/Product";
import { ProductProps } from "@/components/types/product";

const getFrappesData = async (): Promise<ProductProps[]> => {
  const res = await fetch("http://localhost:3000/api/frappes");
  return await res.json();
};

export default async function Frappes() {
  const frappes = await getFrappesData();

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {frappes.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
}
