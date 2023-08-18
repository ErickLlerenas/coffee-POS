import Crepes from "./components/Crepes/Crepes";
import Frappes from "./components/Frappes/Frappes";
import OtherDrinks from "./components/Drinks/Drinks";

import Home from "./components/Home/Home";

export default function Page() {
	return (
		<Home
			crepes={<Crepes />}
			otherDrinks={<OtherDrinks />}
			frappes={<Frappes />}
		/>
	);
}
