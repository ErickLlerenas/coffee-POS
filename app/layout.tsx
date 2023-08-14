import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../theme/globals.css";

import NavBar from "./components/NavBar/NavBar";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "La crepería del café",
	description: "Punto de venta",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<div className="grid grid-cols-12 h-screen">
					<NavBar />
					<section className="col-span-12 lg:col-span-10 bg-gray-100">
						{children}
					</section>
				</div>
			</body>
		</html>
	);
}
