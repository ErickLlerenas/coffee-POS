"use client";

import { useContext } from "react";
import ShoppingCartProduct from "./ShoppingProduct";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { ShoppingCartContextProps } from "../../types/product";

const ShoppingCart = () => {
	const { products } =
		useContext<ShoppingCartContextProps>(ShoppingCartContext);

	return (
		<aside className="flex lg:flex-col col-span-4 bg-white h-screen">
			<div className="flex flex-col items-center mt-4">
				<h3 className="text-2xl font-light mb-14">Carrito</h3>
				{products.map((product) => (
					<ShoppingCartProduct key={product.id} {...product} />
				))}
			</div>
		</aside>
	);
};

export default ShoppingCart;
