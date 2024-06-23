"use client"
import Cafes from '@/components/Cafes'
import FindHero from '@/components/FindHero'
import Footer from '@/components/Footer'
import { filterContext } from '@/context/filterContext'
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const [cafesList,setCafesList] = useState<any>([])
  const [isLoading,setIsLoading] = useState(true)


  const {filter} = useContext(filterContext)

  useEffect(() => {
    getCafeLists()
  }, [])

  const getCafeLists = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/cafe/all`)
    const data = await res.json()
    console.log(data.cafes)
    setCafesList(data.cafes)
    setIsLoading(false)
  } 

  const filteredCafes = cafesList.filter((cafe:any) => {
    if(filter === 'Top') {
      return cafe.rating > 4.3
    }
    if(filter === 'New') {
      return cafe.user_ratings_total < 1000
    }
    if(filter === 'Price') {
      return cafe.price_level === 2
    }
    if(filter === 'Open') {
      return cafe.open_now
    }
    if (filter == null) {
      return cafe
    }
    else{
      return cafe.name.toLowerCase().includes(filter.toLowerCase()) || cafe.formatted_address.toLowerCase().includes(filter.toLowerCase())
    
    }
  })

  return (
    <>
      <FindHero/>
      <Cafes cafesList={filteredCafes} isLoading={isLoading}/>
      <Footer />
      </>
  )
}
