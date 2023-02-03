"use client";

import HeroSection from '@/components/HeroSection'
import InputPanel from '@/components/InputPanel'
import ShortenResults from '@/components/ShortenResults'
import React, { useRef } from 'react'


function Home() {

  const inputRef = useRef(null)


  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>

      <HeroSection inputRef={inputRef} />
      <InputPanel inputRef={inputRef} />
      {/* <ShortenResults /> */}
    </main>
  )
}

export default Home