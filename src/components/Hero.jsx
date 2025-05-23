import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/Hero Image 5.jpg"
// import profilePic from "../assets/vwrftluk.png"

import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl text-lg tracking-tight lg:mt-16 lg:text-8xl">Bercilin Jose</motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Backend Engineer</motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-lg">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full h-auto  lg:w-1/2 ">
          <div className="flex w-full pt-14 pb-8 h-full justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} alt="profilePic"
              className="rounded-full w-56 h-56 object-cover md:w-full md:h-full md:rounded-lg" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
