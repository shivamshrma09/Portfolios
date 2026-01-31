'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa"
import { TbExternalLink } from "react-icons/tb"

interface ProjectCardProps {
  title: string
  date: string
  image: string
  technologies: string[]
  description: string
  githubLink?: string
  liveLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, image, technologies, description, githubLink, liveLink }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className='mt-5 border-b border-neutral-500/20 overflow-hidden bg-neutral-900/30'>
      
      <div className=''>
        <div className='flex flex-row justify-between items-start mb-4'>
          <div>
            <h1 className='text-white text-3xl font-bold mb-2'>{title}</h1>
            <p className='text-neutral-400 text-sm'>{date}</p>
          </div>
          <div className='flex gap-3'>
            {githubLink && (
              <button 
                onClick={() => window.open(githubLink, '_blank')}
                className='flex items-center gap-2 border px-3 py-1 rounded-xl border-neutral-500/30 text-neutral-300 hover:text-white transition-colors'
              >
                <FaGithub/> Github
              </button>
            )}
            {liveLink && (
              <button 
                onClick={() => window.open(liveLink, '_blank')}
                className='flex items-center gap-2 border px-3 py-1 rounded-xl border-neutral-500/30 text-neutral-300 hover:text-white transition-colors'
              >
                <TbExternalLink/> Live Demo
              </button>
            )}
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='mb-4'>
            <Image 
              src={image}
              alt={`${title} Screenshot`}
              width={600} 
              height={300} 
              className='w-full border border-neutral-500/10 shadow-lg'
            />
            
            <div className='flex flex-wrap gap-2 mt-4'>
              {technologies.map((tech, index) => {
                const techColors: Record<string, string> = {
                  'Next.js': 'bg-[#282828]/70',
                  'TypeScript': 'bg-[#377CC8]/70',
                  'Python': 'bg-[#FFD951]/70',
                  'Phi-3.5': 'bg-black',
                  'Judge0 API': 'bg-blue-600/70',
                  'MongoDB': 'bg-green-600/70',
                  'WebSockets': 'bg-purple-600/70',
                  'JavaScript': 'bg-[#FFD951]/70'
                };
                return (
                  <div key={index} className={`${techColors[tech] || 'bg-neutral-700/70'} px-3 py-1 border text-neutral-300 font-semibold border-neutral-500/20 rounded-full text-sm`}>
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <p className='text-neutral-400 text-lg leading-relaxed'>
              {description}
            </p>
            <p className='text-blue-500/50 font-semibold'>View more</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard