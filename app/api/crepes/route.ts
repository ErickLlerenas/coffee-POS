import { ProductProps } from "@/components/app/types/product";

export async function GET(request: Request) {
  const FRAPPES: ProductProps[] = [
    {
      cost: {
        medium: 25,
        large: 23,
      },
      description:
        "Crepa de Oreo askjdad askd asd sakd ks akdjadhsajkhd idbaskdhasdbsa XD",
      id: 0,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de Oreo",
      price: {
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        medium: 25,
        large: 23,
      },
      description: "Crepa de Café",
      id: 1,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de café",
      price: {
        medium: 65,
        large: 70,
      },
    },

    {
      cost: {
        medium: 25,
        large: 23,
      },
      description:
        "Crepa de Oreo askjdad askd asd sakd ks akdjadhsajkhd idbaskdhasdbsa XD",
      id: 2,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de Oreo",
      price: {
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        medium: 25,
        large: 23,
      },
      description: "Crepa de Café",
      id: 3,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de café",
      price: {
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        medium: 25,
        large: 23,
      },
      description:
        "Crepa de Oreo askjdad askd asd sakd ks akdjadhsajkhd idbaskdhasdbsa XD",
      id: 4,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de Oreo",
      price: {
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        medium: 25,
        large: 23,
      },
      description: "Crepa de Café",
      id: 5,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de café",
      price: {
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        medium: 25,
        large: 23,
      },
      description:
        "Crepa de Oreo askjdad askd asd sakd ks akdjadhsajkhd idbaskdhasdbsa XD",
      id: 6,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de Oreo",
      price: {
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        medium: 25,
        large: 23,
      },
      description: "Crepa de Café",
      id: 7,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de café",
      price: {
        medium: 65,
        large: 70,
      },
    },
    {
      cost: {
        medium: 25,
        large: 23,
      },
      description:
        "Crepa de Oreo askjdad askd asd sakd ks akdjadhsajkhd idbaskdhasdbsa skajbdsjbdk",
      id: 8,
      image:
        "https://lh3.googleusercontent.com/Dzh2acVAo2gQ4Z4r1XS7_u14pAY8btq3zO5p7zS2H4GQx6MbFz2CkWlkXZXYvwhLnZbzNc2lCC20NgHJW1dLRAgp8AxacZLRGHX3=w549",
      ingredients: [],
      name: "Crepa de Fresa",
      price: {
        medium: 65,
        large: 70,
      },
    },
  ];
  return new Response(JSON.stringify(FRAPPES));
}
