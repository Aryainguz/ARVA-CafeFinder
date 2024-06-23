"use client"
import CafeHero from '@/components/CafeHero'
import Footer from '@/components/Footer'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = ({params}:any) => {




    const id = params.id
    console.log(params.id)

    const [data,setData] = useState([])
    const [cafeImg,setCafeImg] = useState<any>()
    const [cafeName,setCafeName] = useState<any>()






    useEffect(() => {
        apiCall()
    }, [])

    const apiCall = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/${id}`)
        const data = await res.json()
        setData(data.products)
        setCafeImg(data.cafeImg)
        setCafeName(data.cafeName)
        console.log(data.products)
        }
    

    return(
  <>
  <CafeHero data={data} cafeImg={cafeImg} cafeName={cafeName}/>
  <Footer/>
  </>
    )
}

export default page