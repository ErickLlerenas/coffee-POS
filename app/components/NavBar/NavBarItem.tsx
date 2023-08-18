"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { NavBarItemProps } from "./types";

export default function NavBarItem({ title, icon, href }: NavBarItemProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={classNames(
        "flex flex-row items-center w-52 p-2 rounded-lg text-gray-700",
        {
          "text-orange-400": path === href,
        }
      )}
    >
      <i className={classNames(icon, "text-xl")}></i>
      <span className="ml-4">{title}</span>
    </Link>
  );
}
