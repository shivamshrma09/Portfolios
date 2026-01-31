'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BlogCardProps {
  title: string
  date: string
  image: string
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className='bg-neutral-900/30 border border-neutral-500/20 overflow-hidden hover:border-neutral-500/30 transition-colors cursor-pointer'>
      
      <Image 
        src={image}
        alt='Blog post image'
        width={400}
        height={200}
        className='w-full object-cover'
      />
      
      <div className='px-3 py-2'>
        <h3 className='text-white text-xl font-bold'>{title}</h3>
        <p className='text-neutral-400 text-sm'>{date}</p>
      </div>
    </motion.div>
  )
}

export default BlogCard