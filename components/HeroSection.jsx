"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import HeroImage from '@/public/assets/hero-image.svg'


const HeroSection = ({ inputRef }) => {
    return (
        <section id="home">
            <div className="flex flex-col-reverse md:flex text-center items-center justify-center animate-fadeIn animation-delay-2 my-5 py-8 sm:py-32 md:py-30 md:flex-row md:space-x-4 md:text-left">

                <div className="md:mt-2 md:w-[50vw] py-5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">More than just <br /> Shorter Link</h1>
                    {/* p tag with gray color */}
                    <p className="text-neutral-500 my-6 md:text-xl">
                        Build your brand&#39;s recognition and get detailed insights on how your links are performing.
                    </p>

                    <Link
                        to="projects"
                        className="cursor-pointer text-neutral-100 font-semibold px-8 py-3 bg-teal-600 rounded-full shadow hover:bg-teal-700 my-10"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => { inputRef.current.focus() }}
                    >
                        Get Started
                    </Link>
                </div>
                <div className="flex justify-center md:w-1/2">
                    <Image
                        src={HeroImage}
                        alt=""
                        width={325}
                        height={325}
                        className=""
                    />
                </div>


            </div>

        </section>
    )
}

export default HeroSection