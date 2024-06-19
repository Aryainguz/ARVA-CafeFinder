"use client";
import React from "react";
import Image from "next/image";
import ActionButton from "./ui/ActionButton";
import { Button } from "./ui/button";
import { NavBtn } from "./ui/NavBtn";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-8 border-b">
        <Link href="/">
          <div className="flex relative left-2 bottom-1 sm:left-0">
<h1 className="font-extrabold text-amber-900 text-2xl">
CAFE FINDER
</h1>
            
          </div>
        </Link>
        <div className="visible sm:hidden">
          <ActionButton />
        </div>

        <div className="hidden sm:flex sm:space-x-4">
          <NavBtn />
        </div>
        <div className="hidden md:flex md:space-x-4">
          <a href="">
            <Button className="text-md" variant={"ghost"}>
              Contact us
            </Button>
          </a>
          <a href="">
            <Button className="text-md bg-amber-900">Find Your Cafe</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;