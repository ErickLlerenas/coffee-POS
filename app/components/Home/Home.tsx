"use client";

import { TabView, TabPanel } from "primereact/tabview";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import useProducts from "./hooks/useProducts";
import { HomePageProps } from "./types";

export default function Home({ crepes, frappes }: HomePageProps) {
	const { products, addProduct, removeProduct } = useProducts();

	return (
		<ShoppingCartContext.Provider
			value={{ products, addProduct, removeProduct }}
		>
			<div className="grid grid-cols-12">
				<TabView className="col-span-12 lg:col-span-8">
					<TabPanel header="Crepas" className="bg-gray-100">
						{crepes}
					</TabPanel>
					<TabPanel header="Frappés" className="bg-gray-100">
						{frappes}
					</TabPanel>
				</TabView>
				<ShoppingCart />
			</div>
		</ShoppingCartContext.Provider>
	);
}
