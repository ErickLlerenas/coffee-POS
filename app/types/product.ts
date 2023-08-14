export type ProductProps = {
	id: number;
	name: string;
	price: Price;
	cost: Cost;
	image: string;
	description: string;
	ingredients: Ingredient[];
};

export type ShoppingCartProductProps = {
	id: number;
	name: string;
	image: string;
	price: number;
	size: string;
	amount: number;
};

type Ingredient = {
	name: string;
	cost: number;
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
