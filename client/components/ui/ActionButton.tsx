"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import React from "react";

const ActionButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => {
        setIsOpen(true);
    }
   

    return (
        <Sheet>
            <SheetTrigger 
            >
                    <AlignJustify size={20} />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                        <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                        <SheetClose asChild>
          <Link href="/" 
                    
                        >
                            Home
                        </Link>
          </SheetClose>
          <SheetClose asChild>
          <Link href="">
                          Find Your Cafe
                        </Link>
          </SheetClose>

          <SheetClose asChild>
          <Link href="">
                          Contact
                        </Link>
          </SheetClose>

          <SheetClose asChild>
          </SheetClose>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
    
}

export default ActionButton;