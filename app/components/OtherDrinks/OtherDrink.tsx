"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { OtherDrinkProps } from "../../types/product";
import { Button } from "primereact/button";
import { useCounter } from "primereact/hooks";
import { SelectButton } from "primereact/selectbutton";
import ShoppingCartContext from "../../context/ShoppingCartContext";

export default function OtherDrink({
  description,
  name,
  image,
  price,
  id,
}: OtherDrinkProps) {
  const [value, setValue] = useState<number[]>([]);

  const items = [
    { name: "Deslactosada", value: 1 },
    { name: "Bombones", value: 2 },
  ];
  const { count, increment, decrement } = useCounter(0, {
    min: 0,
    max: 99,
    step: 1,
  });

  const { addProduct } = useContext(ShoppingCartContext);

  const handleAdd = () => {
    if (addProduct) {
      addProduct({
        id,
        image,
        name,
        price,
        amount: count,
      });
    }
  };

  return (
    <div className="flex flex-row rounded-xl bg-white p-3 gap-4">
      <div className="flex flex-col items-center">
        <div className="w-32 bg-gray-100 h-44 rounded-xl mb-4 flex justify-center">
          <Image
            src={image}
            alt={description}
            width={140}
            height={80}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Button
            disabled={count === 0}
            icon="pi pi-minus"
            className="p-button-outlined p-button-rounded"
            onClick={decrement}
          ></Button>
          <span className="font-bold text-2xl text-orange-300">{count}</span>
          <Button
            icon="pi pi-plus"
            className="p-button-outlined p-button-rounded"
            onClick={increment}
          ></Button>
        </div>
      </div>
      <div className="flex flex-col w-52 justify-between">
        <div className="flex flex-col justify-between h-44">
          <div>
            <div className="flex flex-row justify-between my-4">
              <span className="text-gray-700 font-bold text-xl truncate">
                {name}
              </span>

              <span className="text-orange-300 font-bold text-xl">
                ${price}
              </span>
            </div>
            <p className="text-gray-500 font-thin line-clamp-2">
              {description}
            </p>
          </div>
          <div className="flex justify-center">
            <SelectButton
              value={value}
              onChange={({ value }) => setValue(value)}
              optionLabel="name"
              options={items}
              multiple
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button label="Agregar" disabled={!count} onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
}
