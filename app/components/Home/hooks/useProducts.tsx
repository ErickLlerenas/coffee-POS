import { ShoppingCartProductProps } from "@/components/app/types/product";
import { useState } from "react";

const useProducts = () => {
	const [products, setProducts] = useState<ShoppingCartProductProps[]>([]);

	const addProduct = (product: ShoppingCartProductProps) => {
		setProducts([...products, product]);
	};

	const removeProduct = (name: string) => {
		setProducts(products.filter((product) => product.name !== name));
	};

	return {
		products,
		addProduct,
		removeProduct,
	};
};

export default useProducts;
