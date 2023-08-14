export type FrappeProps = {
  id: number;
  name: string;
  price: Price;
  cost: Cost;
  image: string;
  description: string;
  ingredients: Ingredient[];
};

export type CrepeProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  image: string;
  description: string;
  ingredients: Ingredient[];
};

export type OtherDrinkProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  image: string;
  description: string;
  ingredients: Ingredient[];
};

export type ShoppingCartProductProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  size?: string;
  amount: number;
};

type Ingredient = {
  name: string;
  cost: number;
  price: number;
};

type Price = {
  medium: number;
  large: number;
};

type Cost = {
  medium: number;
  large: number;
};

export type ShoppingCartContextProps = {
  products: ShoppingCartProductProps[];
  addProduct?: (product: ShoppingCartProductProps) => void;
  removeProduct?: (name: string) => void;
};
