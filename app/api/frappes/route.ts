import { ProductProps } from "@/components/types/product";

export async function GET(request: Request) {
  const FRAPPES: ProductProps[] = [
    {
      cost: {
        small: 20,
        medium: 25,
        large: 23,
      },
      description:
        "Frappé de Oreo askjdad askd asd sakd ks akdjadhsajkhd idbaskdhasdbsa XD",
      id: 0,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Frappé de Oreo",
      price: {
        small: 60,
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        small: 20,
        medium: 25,
        large: 23,
      },
      description: "Frappé de Café",
      id: 1,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Frappé de café",
      price: {
        small: 60,
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        small: 20,
        medium: 25,
        large: 23,
      },
      description:
        "Frappé de Oreo askjdad askd asd sakd ks akdjadhsajkhd idbaskdhasdbsa skajbdsjbdk",
      id: 2,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Frappé de Fresa",
      price: {
        small: 60,
        medium: 65,
        large: 70,
      },
    },
  ];
  return new Response(JSON.stringify(FRAPPES));
}
