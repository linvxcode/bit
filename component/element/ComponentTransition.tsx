'use client'
import React from "react";
import { motion } from "framer-motion";

interface TransitionProps {
  children?: any;
  className?: string;
  delay?: number;
  style?: any;
}

export const translateInViewVariant = {
  initial: {
    opacity: 0,
    y: 90,
    // height: '10px'
  },
  whileInview: {
    opacity: 1,
    y: 0,
    // height: 'auto',

  },
}

const ComponentTransition = ({ children,className, delay,style}: TransitionProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInview"
      variants={translateInViewVariant}
      transition={{
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1.5,
      }}
      className={className}
      viewport={{once: true}}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ComponentTransition;
