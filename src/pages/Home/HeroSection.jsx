import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaRegCirclePlay } from 'react-icons/fa6'

const HeroSection = () => {
    const [openModal,setOpenModal]=useState(false)
    const Open=()=> setOpenModal(true)
    const Close=()=> setOpenModal(false)
  return (
    <section className='w-full bg-[#0F172A] text-white'>
      <div className='max-w-screen-2xl flex flex-col lg:flex-row items-center gap-8 px-4 md:px-6 lg:px-10 py-10 md:py-16 lg:py-20 mx-auto'>
        
        {/* বাম পাশে লেখা */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-3xl md:text-4xl font-extrabold leading-snug'>
            Elevate Your English.<br className='md:hidden' /> Speak with Confidence.
          </h1>
          <p className='text-gray-400 mt-4 mb-6 md:pr-10'>
            AccentPilot offers expert-led English fluency and accent training for professionals and global communicators.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>

            {/* Start Button with icon */}
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium flex items-center gap-2 justify-center'>
              Start Your Journey <FaArrowRight />
            </button>

            {/* Contact Button */}
            <button className='border border-gray-500 text-gray-300 hover:bg-gray-700 px-6 py-3 rounded font-medium'>
              Contact Us
            </button>
          </div>
        </div>

        {/* ডান পাশে ছবি */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0'>
          <div className='relative flex items-center justify-center group'>
            
            <img src='hero.png' alt='Confident English Speaker' className='max-w-full h-auto' />
            <button onClick={Open} className='absolute z-10 text-gray-800 hover:text-amber-800 text-4xl group-hover:text-gray-600 transition'><FaRegCirclePlay /></button>
          </div>
        </div>

        {openModal && (<div className='inset-0 z-50 fixed flex items-center justify-center  bg-black'>
            <div className='bg-gray-300 p-5 shadow-lg max-w-lg w-full relative'>
                <button onClick={Close} className='absolute bg-black text-white w-6 h-6 flex items-center justify-center text-xl rounded-full right-1 top-1'>&times;</button>
                <iframe className='w-full aspect-video' width="560" height="315" src="https://www.youtube.com/embed/1n83x5g8pQk?si=xsjpHCZjA4WlgB3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>)}
      </div>
    </section>
  )
}

export default HeroSection
