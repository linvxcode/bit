"use client";
import { motion } from "framer-motion";
import React from "react";

interface H1Props {
  title?: string;
  className?: string;
  textColor?: any;
}

export default function H1({
  title = "",
  className = "",
  textColor = "normal",
}: H1Props) {
  return (
    <div className={`${className} overflow-hidden w-auto px-2 relative flex  `}>
      <motion.h1
        initial={{ y: "95%" }}
        whileInView={{ y: "0%" }}
        transition={{
          type: "tween",
          ease: [0.8, 0.2, 0, 1],
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className={`${ColorShadow(textColor)} relative`}
      >
        {title}
      </motion.h1>
    </div>
  );
}

const ColorShadow = (textColor: any) => {
  const Color: any = {
    colorShadow:
      "bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFF7]  to-[#727267] ",
    normal: "text-[#7D7F78]",
    white: "text-[#FFFFF7]",
    opacity: "text-[#fffff7b7]",
    blue: "text-[#01a2e9]",
  };
  return Color[textColor] || Color.normal;
};
