"use client";
import { TabView, TabPanel } from "primereact/tabview";

import Crepes from "./components/Crepes";
import Frappes from "./components/Frappes";

export default function Home() {
  return (
    <div className="grid grid-cols-10">
      <TabView className="col-span-8">
        <TabPanel header="Crepas" className="bg-gray-100">
          {/* <Crepes /> */}
        </TabPanel>
        <TabPanel header="Frappés" className="bg-gray-100">
          {/* <Frappes /> */}
        </TabPanel>
      </TabView>
      <aside className="col-span-2 bg-white">asdadad</aside>
    </div>
  );
}
