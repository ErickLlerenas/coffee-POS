import Crepes from "./components/Crepes/Crepes";
import Frappes from "./components/Frappes/Frappes";
import OtherDrinks from "./components/OtherDrinks/OtherDrinks";

import Home from "./components/Home/Home";

export default function Page() {
  return (
    <Home
      crepes={<Crepes />}
      frappes={<Frappes />}
      otherDrinks={<OtherDrinks />}
    />
  );
}
