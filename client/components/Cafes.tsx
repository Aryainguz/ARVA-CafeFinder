"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { useState } from 'react'
import CafeItemCard from './ui/CafeItemCard'

export default function Cafes({cafesList}:any) {


  const [selectedCafe,setSelectedCafe] = useState<any>([])
  const [showSide,setShowSide] = useState(false)


  const showDetails = (cafe:any) => {
    setSelectedCafe(cafe)
    setIsOpen(true)
  }

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleSheet = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='mt-10'>
        <h2 className='text-[20px] sm:text-[25px] font-bold ml-7 border-b-2 border-amber-950 max-w-max sm:ml-[80px]'>Searched Cafes</h2>
        <div className='grid grid-cols-1 sm:grid-cols-4 mx-[80px] mt-[20px] mb-[20px] gap-[30px]'>
            {cafesList.map((item:any,index:any)=>(
                    <CafeItemCard cafe={item}
                    showDetails={showDetails}
                    key={index}
                    />
            ))}
        </div>
      
        
          <Sheet
          onOpenChange={toggleSheet}
      open={isOpen}
        >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{selectedCafe?.name}</SheetTitle>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    
        
       
    </div>
  )
}
