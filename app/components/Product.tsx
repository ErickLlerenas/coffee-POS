"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { ProductProps } from "../types/product";
import { Button } from "primereact/button";
import { useCounter } from "primereact/hooks";
import { SelectButton } from "primereact/selectbutton";
import ShoppingCartContext from "../context/ShoppingCartContext";

export default function Product({
  description,
  name,
  image,
  price,
  id,
}: ProductProps) {
  const { count, increment, decrement } = useCounter(0, {
    min: 0,
    max: 99,
    step: 1,
  });

  const [value, setValue] = useState<number>(0);
  const items = [
    { name: "Me", value: 2 },
    { name: "Gr", value: 3 },
  ];

  const handlePrice = (): number => {
    switch (value) {
      case 2:
        return price.medium;
      case 3:
        return price.large;
      default:
        return 0;
    }
  };

  const handleSize = (): string => {
    switch (value) {
      case 2:
        return "Mediano";
      case 3:
        return "Grande";
      default:
        return "";
    }
  };

  const { addProduct } = useContext(ShoppingCartContext);

  const handleAdd = () => {
    if (addProduct) {
      addProduct({
        id,
        image,
        name,
        price: handlePrice(),
        size: handleSize(),
        amount: count,
      });
    }
  };

  return (
    <div className="flex flex-row rounded-xl bg-white p-3 gap-2">
      <div className="flex flex-col items-center">
        <div className="w-32 bg-gray-100 h-44 rounded-xl mb-4 flex justify-center">
          <Image
            src={image}
            alt={description}
            width={140}
            height={80}
            className="object-cover"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Button
            disabled={count === 0}
            icon="pi pi-minus"
            className="p-button-outlined p-button-rounded"
            onClick={decrement}
          ></Button>
          <span className="font-bold text-2xl text-orange-200">{count}</span>
          <Button
            icon="pi pi-plus"
            className="p-button-outlined p-button-rounded"
            onClick={increment}
          ></Button>
        </div>
      </div>
      <div className="flex flex-col w-48 justify-between">
        <div className="flex flex-col justify-between h-44">
          <div>
            <div className="flex flex-row justify-between my-4">
              <span className="text-gray-700 font-bold text-xl">{name}</span>
              {Boolean(value) && (
                <span className="text-orange-300 font-bold text-xl">
                  ${handlePrice()}
                </span>
              )}
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
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            label="Agregar"
            disabled={!count || !value}
            onClick={handleAdd}
          />
        </div>
      </div>
    </div>
  );
}
