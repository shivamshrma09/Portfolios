'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GrAchievement } from "react-icons/gr"

interface EducationCardProps {
  degree: string
  institution: string
  duration: string
  achievements: string[]
  images: string[]
  currentImageIndex: number
}

const EducationCard: React.FC<EducationCardProps> = ({ 
  degree, 
  institution, 
  duration, 
  achievements, 
  images, 
  currentImageIndex 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className='flex flex-row gap-10 mb-5 border-b border-neutral-500/20'>
      <div className='flex flex-col gap-4 flex-1'>
        <div className='py-6'>
          <h1 className='text-neutral-500 text-2xl font-bold flex flex-col gap-3'>
            {degree} <span className='text-white font-semibold text-2xl'>{institution}</span>
          </h1>
        </div>
        
        <div>
          <h2 className='text-neutral-300 text-xl py-1 px-3 bg-neutral-900/50 border border-neutral-700/30 rounded-xl font-bold flex flex-row gap-2 items-center mb-3'>
            Achievements <GrAchievement color='#facc15' />
          </h2>
          <ul className='text-neutral-400 space-y-2 text-xl'>
            <li className='flex items-center gap-2'>• {duration}</li>
            {achievements.map((achievement, index) => (
              <li key={index} className='flex items-center gap-2'>• {achievement}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className='flex-shrink-0 w-130 h-80'>
        <Image 
          key={currentImageIndex}
          src={images[currentImageIndex]} 
          alt={`${institution} Logo`} 
          width={320} 
          height={320} 
          className='w-full h-full object-cover border border-neutral-500/20 shadow-lg transition-opacity duration-500'
        />
      </div>
    </motion.div>
  )
}

export default EducationCard