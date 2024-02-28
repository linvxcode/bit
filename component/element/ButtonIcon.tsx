'use client'
import { motion } from 'framer-motion';
import React from 'react'

interface IconBtnprops {
  title?: string;
  icon?: any;
  onClick?: any;
}

export default function ButtonIcon({title= '', icon, onClick}: IconBtnprops) {
  return (
    <div className='w-auto flex items-center'>
      <motion.button 
      whileTap={{
        scale: 0.90
      }}
      onClick={onClick} className='w-auto flex items-center gap-2 px-5 py-3 bg-[#3f3f3f88] rounded-2xl'>
        {icon}

        {title && (
          <h1 className='text-base'>
          {title}
        </h1>
          )}
      </motion.button>
    </div>
  )
}
