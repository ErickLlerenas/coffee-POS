"use client";

import Image from "next/image";
import { Button } from "primereact/button";
import { useCounter } from "primereact/hooks";
import { ShoppingCartProductProps } from "@/components/app/types/product";
import { INITIAL_COUNTER } from "./constants";

export default function ShoppingProduct({
  amount,
  name,
  image,
  price,
  size,
}: ShoppingCartProductProps) {
  const { count, increment, decrement } = useCounter(amount, INITIAL_COUNTER);

  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col items-center">
        <div className="w-32 bg-gray-100 h-44 rounded-xl mb-4 flex justify-center">
          <Image
            src={image}
            alt={name}
            width={140}
            height={80}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col w-48 justify-between">
        <div className="flex flex-col justify-between h-44">
          <div>
            <div className="flex flex-row justify-between my-4">
              <span className="text-gray-700 font-bold text-xl">{name}</span>
              <span className="text-orange-300 font-bold text-xl">
                ${count * price}
              </span>
            </div>
            <p className="text-gray-500 font-thin line-clamp-2">{size}</p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-row gap-2 items-center">
              <Button
                disabled={count === 0}
                icon="pi pi-minus"
                className="p-button-outlined p-button-rounded"
                onClick={decrement}
              ></Button>
              <span className="font-bold text-2xl text-orange-300">
                {count}
              </span>
              <Button
                icon="pi pi-plus"
                className="p-button-outlined p-button-rounded"
                onClick={increment}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
