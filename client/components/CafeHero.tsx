import { Eye, Plus } from 'lucide-react'
import Image from 'next/image'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function CafeHero({data,cafeImg,cafeName}:any) {

  
  return (
    <>
    <section className={'flex justify-center'}>
      <div className={'z-[-1] mt-6 min-h-[200px] overflow-hidden'}>
        <Image
          src={cafeImg}
          width={1144}
          height={400}
          className={
            'w-full h-[40vh] scale-[1.9] min-[450px]:scale-[1.4] min-[572px]:scale-100'
          }
          style={{ objectFit: 'contain' }}
          alt="CafeHero"
          priority
        />
      </div>
    </section>
            <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{cafeName} Products</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                        Explore wide range of products. We have something for everyone. From coffee to snacks, we have it all.</p>
                </div>
        
                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">

                {data.map((product:any) => (


                    // <div className="relative group">
                    //     <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    //         <img className="object-cover w-72 h-72 transition-all duration-300 group-hover:scale-125" src={product.image} alt="" />
                    //     </div>
                    //     <div className="absolute left-3 top-3">
                    //         <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">{product.category}</p>
                    //     </div>
                    //     <div className="flex items-start justify-between mt-4 space-x-4">
                    //         <div>
                    //             <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    //                     {product.name}
                    //                     <span className="absolute inset-0" aria-hidden="true"></span>
                    //             </h3>
                    //             <div className="flex items-center mt-2.5 space-x-px">
                                   
                    //             </div>
                    //         </div>
        
                    //         <div className="text-right">
                    //             <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">Rs. {product.price}</p>
                    //         </div>
                    //     </div>
                    // </div>
                    <div className="relative group cursor-pointer">
                    <div>
                    <img className="object-cover w-72 h-72 transition-all duration-300" src={product.image} alt="" />
                    </div>
            
                  
                    <div className="flex items-start justify-between mt-4 space-x-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          <a href="#" title="">
                            {product.name}
                            <span className="absolute inset-0" aria-hidden="true"></span>
                          </a>
                        </h3>
                      </div>
            
                      <div className="text-right">
                        <p className="font-bold text-gray-900 text-sm md:text-base">
                          ₹{product.price}
                        </p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300">
                      <span className="text-gray-800 cursor-pointer text-xl bg-gray-200 px-4 py-2 rounded-full">
                      <AlertDialog>
  <AlertDialogTrigger>
    <Plus />
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Do you wanna order this product!</AlertDialogTitle>
      <AlertDialogDescription>
      On confiriming payment gateway will be opened.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

                      </span>
                    </div>
                  </div>
                ))}
        
                   
                </div>
            </div>
        </section>
        </>
  )
}
