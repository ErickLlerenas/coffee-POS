import { createContext } from "react";
import { ShoppingCartContextProps } from "../types/product";

const ShoppingCartContext = createContext<ShoppingCartContextProps>({
	products: [],
});

export default ShoppingCartContext;
