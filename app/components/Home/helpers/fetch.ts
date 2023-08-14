import { ProductProps } from "@/components/app/types/product";

let hostname = process.env.PRODUCTION_URL;
if (process.env.NODE_ENV === "development") {
  hostname = process.env.LOCAL_URL;
}

export const getCrepesData = async (): Promise<ProductProps[]> => {
  const res = await fetch(`${hostname}/api/crepes`, {
    next: { revalidate: 60 },
  });
  return await res.json();
};

export const getFrappesData = async (): Promise<ProductProps[]> => {
  const res = await fetch(`${hostname}/api/frappes`, {
    next: { revalidate: 60 },
  });
  return await res.json();
};
