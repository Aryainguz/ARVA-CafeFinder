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
    const res = await fetch('/api/google-place-api?q=cafes in bangalore')
    const data = await res.json()
    setCafesList(data.data.results)
    console.log(data.data.results)
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
      return cafe.opening_hours.open_now
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
