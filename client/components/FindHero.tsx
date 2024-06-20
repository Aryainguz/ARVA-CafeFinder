import { AirVent, Car, Hotel, Map, RocketIcon, Star, StarsIcon, Wifi } from 'lucide-react'


const category = [
  {
    name: 'Wifi',
    icon: <Wifi size={30} />
  },
  {
    name: 'AC',
    icon: <AirVent size={30} />
  },
  {
    name: 'Park',
    icon: <Car size={30} />
  },
  {
    name: 'Rest',
    icon: <Hotel size={30} />
  },
  {
    name:"Top",
    icon: <Star size={30} />
  },
  {
    name:"New",
    icon: <StarsIcon size={30} />
  },
  {
    name:"Near",
    icon: <Map size={30} />
  },
  {
    name:"Fast",
    icon: <RocketIcon size={30} />
  }
]

export default function FindHero() {
  return (
    <div className='text-center'>
        <div>
            <div className='mt-[70px]'>
         <div>
  <h1 className="px-10 sm:px-6 text-lg text-gray-600 font-inter">Finding Cafes made easy. For ARVA</h1>
  <p className="mt-2 sm:mt-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
    Find Your Next 
    <span className="relative inline-flex sm:inline">
      <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0" />
      <span className="relative text-amber-950"> Cafe.</span>
    </span>
  </p>
</div>

                <div className='pt-4 flex justify-center gap-3 my-4'>
                      <input type="text" id="search" name="search" placeholder='Search Anything' className='z-10 p-3 bg-white border-[1px] rounded-full shadow-sm px-5 pr-[30px] sm:pr-[400px] outline-amber-700 '></input>
                      <button className='bg-amber-900 rounded-full p-3 hover:scale-105 z-10 shadow-sm transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                      </button>
                </div>
                <div className='flex flex-col justify-center items-center '>
                  <h2>Or Browse the category</h2>
                  <div className='grid grid-cols-4 p-8 sm:grid-cols-8 justify-center mt-2 gap-10 z-10'>
                    {category.map((item,index)=>(
                      <div key={index} className=' border-[1px] rounded-full w-[60px] p-4 bg-white hover:border-amber-700 hover:scale-110 cursor-pointer'>
                        {item.icon}
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
