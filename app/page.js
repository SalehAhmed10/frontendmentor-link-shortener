"use client";

import Features from '@/components/Fetures';
import FooterCta from '@/components/FooterCta';
import HeroSection from '@/components/HeroSection'
import InputPanel from '@/components/InputPanel'
import ShortenResults from '@/components/ShortenResults'
import React, { useRef } from 'react'


function Home() {

  const inputRef = useRef(null)


  return (
    <main className='mx-auto  '>

      <div className='mx-auto max-w-3xl  md:max-w-5xl px-4 sm:px-6'>
        <HeroSection inputRef={inputRef} />

      </div>
      <InputPanel inputRef={inputRef} />
      {/* <ShortenResults /> */}


      <Features />

      <FooterCta inputRef={inputRef} />
    </main>
  )
}

export default Home