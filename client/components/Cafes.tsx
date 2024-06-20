"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import CafeItemCard from "./ui/CafeItemCard";
import Image from "next/image";
import {
  Locate,
  Map,
  MapPin,
  Share,
  Star,
  Stars,
  User,
  Users,
} from "lucide-react";

export default function Cafes({ cafesList }: any) {
  const [selectedCafe, setSelectedCafe] = useState<any>([]);
  const [showSide, setShowSide] = useState(null);

  const showDetails = (cafe: any) => {
    setShowSide(cafe);
    setSelectedCafe(cafe);
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-10">
      <h2 className="text-[20px] sm:text-[25px] font-bold ml-7 border-b-2 border-amber-950 max-w-max sm:ml-[80px]">
        Searched Cafes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 mx-[80px] mt-[20px] mb-[20px] gap-[30px]">
        {cafesList.map((item: any, index: any) => (
          <CafeItemCard cafe={item} showDetails={showDetails} key={index} />
        ))}
      </div>

      <Sheet onOpenChange={toggleSheet} open={isOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{selectedCafe?.name}</SheetTitle>
            <SheetDescription>
              {/* <p>{selectedCafe?.formatted_address}</p>
            <Image
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&height=100
              &photo_reference=${selectedCafe?.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
                `}
              alt="cafe"
              width={200}
              height={200}
            /> */}

              {showSide && (
                <>
                  <Image
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&height=100
              &photo_reference=${selectedCafe?.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
                `}
                    className="rounded-t-lg h-[200px] w-full object-cover my-4"
                    alt="cafe"
                    width={200}
                    height={200}
                  />

                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-600 ">
                    <MapPin size={20} className="inline mr-2" />
                    {selectedCafe?.formatted_address.split(",")[0] +
                      "," +
                      selectedCafe?.formatted_address.split(",")[1] +
                      "," +
                      selectedCafe?.formatted_address.split(",")[2] +
                      "," +
                      selectedCafe?.formatted_address.split(",")[3] +
                      "," +
                      selectedCafe?.formatted_address.split(",")[4]}
                  </h5>
                  <p className="mb-3 font-bold text-lg text-gray-700">
                    <Star size={20} className="inline mr-2" />
                    {selectedCafe?.rating}{" "}
                    <Users size={20} className="inline ml-4" />{" "}
                    {selectedCafe?.user_ratings_total}
                  </p>
                  <button
                    onClick={() =>
                      navigator.geolocation.getCurrentPosition((position) => {
                        window.open(
                          `https://www.google.com/maps/dir/${position.coords.latitude},${position.coords.longitude}/${selectedCafe?.formatted_address}`
                        );
                      })
                    }
                    className="inline-flex mr-2 my-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-800 rounded-lg hover:bg-amber-800"
                  >
                    <Map size={20} className="inline mr-2" />
                    Location
                  </button>
                  <button
                    onClick={() =>
                      navigator.geolocation.getCurrentPosition((position) => {
                        window.open(
                          `https://www.google.com/maps/dir/${position.coords.latitude},${position.coords.longitude}/${selectedCafe?.formatted_address}`
                        );
                      })
                    }
                    className="inline-flex my-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-800 rounded-lg hover:bg-amber-800"
                  >
                    <Share size={20} className="inline mr-2" />
                    Share
                  </button>
                  <iframe
                    width={330}
                    height={250}
                    className="rounded-lg shadow-lg py-2 my-2"
                    loading="lazy"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}&q=${selectedCafe?.formatted_address}`}
                  ></iframe>
                </>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
