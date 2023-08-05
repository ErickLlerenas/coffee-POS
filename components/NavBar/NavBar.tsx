import Image from "next/image";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <nav className="col-span-2 bg-white flex flex-col gap-2 items-center">
      <div className="flex flex-row justify-center items-center my-6">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={50}
          height={50}
        />
        <h1 className="text-amber-950 font-bold text-xl ml-2 w-32 leading-5 whitespace-pre-line">
          La crepería del café
        </h1>
      </div>
      <NavBarItem title="Inicio" icon="pi pi-shopping-cart" href="/" />
      <NavBarItem title="Ganancias" icon="pi pi-chart-line" href="/earnings" />
      <NavBarItem title="Menu" icon="pi pi-shopping-bag" href="/menu" />
    </nav>
  );
}
