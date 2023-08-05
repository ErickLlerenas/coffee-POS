import Product from "@/components/components/Product";
import { ProductProps } from "@/components/types/product";

const getCrepesData = async (): Promise<ProductProps[]> => {
  const res = await fetch("http://localhost:3000/api/crepes", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export default async function Crepes() {
  const crepes = await getCrepesData();

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {crepes.map((crepe) => (
        <Product {...crepe} key={crepe.id} />
      ))}
    </div>
  );
}
