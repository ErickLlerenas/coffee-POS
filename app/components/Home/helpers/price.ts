export const handlePrice = (
	size: string,
	count: number,
	price: number
): number => {
	switch (size) {
		case "Chico":
			return count * price;
		case "Mediano":
			return count * price;
		case "Grande":
			return count * price;
		default:
			return 0;
	}
};
