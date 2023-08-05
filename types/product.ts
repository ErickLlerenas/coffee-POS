export type ProductProps = {
  id: number;
  name: string;
  price: Price;
  cost: Cost;
  image: string;
  description: string;
  ingredients: Ingredient[];
};

type Ingredient = {
  name: string;
  cost: number;
};

type Price = {
  small: number;
  medium: number;
  large: number;
};

type Cost = {
  small: number;
  medium: number;
  large: number;
};
