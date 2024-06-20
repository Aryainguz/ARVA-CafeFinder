import { MapPin, Star } from "lucide-react";
import Image from "next/image";

const CafeItemCard = ({ cafe,showDetails }: any) => {


    const BASE_PHOTO_URL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&height=100";
  return (
    <>
      <div
        className="w-[300px] cursor-pointer hover:shadow-lg hover:scale-95 transition-all
relative right-10 sm:right-0 sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow "
onClick={()=>showDetails(cafe)}
      >
       <Image
            className="rounded-t-lg h-[200px] w-full object-cover"
            src={`${BASE_PHOTO_URL}&photo_reference=${cafe.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}`}
            alt="icon"
            width={500}
            height={100}
          />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {cafe.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <MapPin size={20} className="inline mr-2" />
            {cafe.formatted_address.split(",")[0] +
              "," +
              cafe.formatted_address.split(",")[1] +
              "," +
              cafe.formatted_address.split(",")[2] +
              "," +
              cafe.formatted_address.split(",")[3] +
              "," +
              cafe.formatted_address.split(",")[4]}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <Star size={20} className="inline mr-2" />
            {cafe.rating}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-700 rounded-lg hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
          >
            View Cafe
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default CafeItemCard;
