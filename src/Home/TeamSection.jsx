import React from 'react'

import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import HeadingSection from '../components/HeadingSection';
import { Link } from 'react-router';

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Istiya Hasib",
    role: "Fluency Coach",
    image: "taslima.jpg",
    socials: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Daniel Lee",
    role: "Accent Specialist",
    image: "daniel.jpg",
    socials: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Lamia Haque",
    role: "Learning Strategist",
    image: "lamiya.jpg",
    socials: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 4,
    name: "Junaid Rahman",
    role: "Career Coach",
    image: "arav.jpg",
    socials: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

const TeamSection = () => {
  return (
<section>
    <div>
        <HeadingSection title='Our Coaches' heading='Meet the Experts Guiding You'/>
    </div>
    

    <div className='grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-8 px-4 md:px-8 lg:px-22 my-5 '>
        {teamMembers.map((team)=>(
            <div key={team.id} className=' '>
                <img src={team.image} alt="photo" className='w-xl object-cover opacity-20 '/>
                <div className='bg-slate-300 p-2 hover:rounded duration-300 hover:scale-105'>
                    <h4 className='text-gray-900 font-bold'>{team.name}</h4>
                    <p className='text-gray-600 leading-2 text-sm'>{team.role}</p>
                    <div className='text-blue-600 flex gap-2 pt-4 cursor-pointer'>
                        <Link><FaFacebook/></Link>
                        <Link><FaInstagram/></Link>
                        <Link><FaTwitter/></Link>
                        <Link><FaLinkedin/></Link>
                    </div>
                    <button className='text-white bg-blue-600 px-3 py-1 mt-2 text-sm rounded-full hover:bg-blue-700 transition transform duration-500 mb-1'>Contact {team.name.split(' ')[0]}</button>
                </div>
            </div>
        ))}
    </div>
</section>
)
}

export default TeamSection