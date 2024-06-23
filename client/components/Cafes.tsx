"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { filterContext } from "@/context/filterContext";
import {
  MapPin,
  Share,
  Star,
  Users,
  ViewIcon
} from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CafeItemCard from "./ui/CafeItemCard";
import { useRouter } from "next/navigation";

export default function Cafes({ cafesList,isLoading }: any) {
  const [selectedCafe, setSelectedCafe] = useState<any>([]);
  const [showSide, setShowSide] = useState(null);

  const showDetails = (cafe: any) => {
    setShowSide(cafe);
    setSelectedCafe(cafe);
    setIsOpen(true);
  };

  const { filter } = useContext(filterContext);
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [filter]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };



  const router = useRouter();

  return (
    <div className="mt-10">
      <h2 className="text-[20px] flex sm:text-[25px] font-bold ml-7 border-b-2 border-blue-500 max-w-max sm:ml-[80px]">
        Searched Cafes{" "}
        {loading && (
          <>
            <svg
              aria-hidden="true"
              className="w-6 h-6 mx-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </>
        )}
      </h2>

      

      {
        loading ? <>
        <div className="grid grid-cols-1 sm:grid-cols-4 mx-[80px] mt-[20px] mb-[20px] gap-[30px]">
{cafesList.map((item: any, index: any) => (
 <div role="status" key={index} className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
 <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
   <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
     <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
     <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
   </svg>
 </div>
 <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
 <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
 <div className="flex items-center mt-4">
   
   <div>
     <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
     <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
   </div>
 </div>
 <span className="sr-only">Loading...</span>
</div>
))}
</div>
</> : 

<div className="grid grid-cols-1 sm:grid-cols-4 mx-[80px] mt-[20px] mb-[20px] gap-[30px]">
{cafesList.map((item: any, index: any) => (
  <CafeItemCard cafe={item} showDetails={showDetails} key={index} />
))}
</div>
      }

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
                      router.push(
                        `/cafes/${selectedCafe?.place_id}`
                      )
                    }
                    className="inline-flex mr-2 my-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-800 rounded-lg hover:bg-amber-800"
                  >
                    <ViewIcon size={20} className="inline mr-2" />
                    View Cafe
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
