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
} from "@/components/ui/alert-dialog";
import { Plus } from 'lucide-react';
import Image from 'next/image';


export default function CafeByID({data,cafeImg,cafeName}:any) {

  const handleRazorPay = async (price: number) => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options: any = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: price * 100, 
      currency: "INR",
      name: "ARVA HEALTH",
      description: "ARVA Health Payment Gateway",
      image: "/cafe.png",
      handler: function (response: any) {
        alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Aryan Inguz",
        email: "aryaninguz369@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "CafeByID",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  
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
          alt="CafeByID"
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

                {data.map((product:any,index:any) => (


                   
                    <div className="relative group cursor-pointer" key={index}>
                    <div>
                    <img className="object-cover w-72 h-72 transition-all duration-300" src={product.image} alt="" />
                    </div>
                    <div className="absolute left-3 top-3">
                            <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">{product.category}</p>
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
      On confiriming payment gateway will be opened. Bill of Rs {product.price}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>handleRazorPay(product.price)}>Pay</AlertDialogAction>
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
