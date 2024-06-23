import { Coffee } from "lucide-react";
import Link from "next/link";

const ComponentName = () => {
  return (
    <div className="relative">
      <section className="bg-yellow-50 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[500px]">
          <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 className="text-6xl font-bold text-black sm:text-6xl xl:text-8xl">
                Find Cafes.
                <br />
                Fast, Easy.
              </h1>
              <p className="mt-8 text-xl text-black">
                Made for ARVA team members, our cafe finder helps you find the
                best cafes near you. Insantly.
              </p>

              <div className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full">
                  <div className="flex flex-col items-start sm:flex-row">
                    <Link
                      href={`/find`}
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-amber-800 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-base text-black">
                Trusted
                <span className="font-semibold text-amber-600">
                  {" "}
                  by 1000+{" "}
                </span>{" "}
                coffee lovers in Bangalore. .
              </p>
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <video
                className="object-cover w-full h-full scale-150 "
                muted
                loop
                autoPlay
              >
                <source src="/src/heroVideo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center">
                  <Coffee className="w-12 h-12 text-white" />
                  <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
                </div>
                <p className="max-w-xs mt-1.5 text-xl text-white">Cafes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ComponentName;
