"use client"
import Cafes from '@/components/Cafes'
import FindHero from '@/components/FindHero'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [cafesList,setCafesList] = useState([])

  useEffect(() => {
    getCafeLists()
  }, [])

  const getCafeLists = async () => {
    const res = await fetch('/api/google-place-api?q=cafes in bangalore')
    const data = await res.json()
    setCafesList(data.data.results)
  } 
  return (
    <>
      <FindHero/>
      <Cafes cafesList={cafesList}/>
      <Footer />
      </>
  )
}
