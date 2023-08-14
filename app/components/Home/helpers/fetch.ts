import {
  CrepeProps,
  FrappeProps,
  OtherDrinkProps,
} from "@/components/app/types/product";

let hostname = process.env.PRODUCTION_URL;
if (process.env.NODE_ENV === "development") {
  hostname = process.env.LOCAL_URL;
}

export const getCrepesData = async (): Promise<CrepeProps[]> => {
  const res = await fetch(`${hostname}/api/crepes`, {
    next: { revalidate: 60 },
  });
  return await res.json();
};

export const getFrappesData = async (): Promise<FrappeProps[]> => {
  const res = await fetch(`${hostname}/api/frappes`, {
    next: { revalidate: 60 },
  });
  return await res.json();
};

export const getOtherDrinksData = async (): Promise<OtherDrinkProps[]> => {
  const res = await fetch(`${hostname}/api/otherDrinks`, {
    next: { revalidate: 60 },
  });
  return await res.json();
};
