"use client";
import React from "react";
import Image from "next/image";
import path from "path";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuOption = [
  {
    id: 1,
    name: "Home",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "History",
    path: "/dashboard/history",
  },
  {
    id: 3,
    name: "Pricing",
    path: "/dashboard/billing",
  },
  {
    id: 4,
    name: "Profile",
    path: "/profile",
  },
];
const AppHeader = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center p-4 shadow px-10 md:px-20 lg:20-px ">
      <Image src="/logo.svg" alt="Logo" width={180} height={90} />

      <div className="hidden md:flex gap-12 items-center">
        {menuOption.map((option, index) => (
          <Link key={index} href={option.path}>
            <h2
              className={`cursor-pointer hover:font-bold tracking-all ${
                pathname === option.path ? "font-bold text-blue-900" : ""
              }`}
            >
              {option.name}
            </h2>
          </Link>
        ))}
      </div>
      <UserButton />
    </div>
  );
};

export default AppHeader;
