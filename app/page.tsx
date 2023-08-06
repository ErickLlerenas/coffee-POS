import Crepes from "./components/Home/components/Crepes/Crepes";
import Frappes from "./components/Home/components/Frappes/Frappes";
import Home from "./components/Home/Home";

export default function Page() {
	return <Home crepes={<Crepes />} frappes={<Frappes />} />;
}
