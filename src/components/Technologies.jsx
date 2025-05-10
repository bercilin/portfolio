import { RiReactjsLine } from "react-icons/ri";
import { FaJava,FaDocker } from "react-icons/fa";
import { DiRedis,DiGithub } from "react-icons/di";
import { SiApachekafka,SiMongodb,SiElasticsearch,SiSpringsecurity,SiKubernetes } from "react-icons/si";
import { BiLogoPostgresql,BiLogoSpringBoot } from "react-icons/bi"

import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
}); 

const techIcons = [
  { Icon: RiReactjsLine, color: "text-cyan-500", delay: 2.5 },
  { Icon: FaJava, color: "text-orange-500", delay: 3 },
  { Icon: BiLogoPostgresql, color: "text-sky-500", delay: 5 },
  { Icon: DiRedis, color: "text-red-500", delay: 2 },
  { Icon: BiLogoSpringBoot, color: "text-green-500", delay: 6 },
  { Icon: SiApachekafka, color: "text-blue-500", delay: 4 },
  { Icon: SiMongodb, color: "text-green-500",delay: 3 },
  { Icon: FaDocker, color: "text-blue-500", delay: 3.5 },
  { Icon: SiSpringsecurity, color: "text-green-500", delay: 3.5 },
  { Icon: SiElasticsearch, color: "text-yellow-500", delay: 3.5 },
  { Icon: SiKubernetes, color: "text-blue-500", delay: 3.5 },
  { Icon: DiGithub, color: "text-black-500", delay: 3.5 }
];


const Technologies = () => {
  return (
    <div className="items-center justify-center flex flex-col">
      <motion.h2 
      whileInView = {{ opacity: 1, y: 0 }}
      initial = {{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1.5 }}
  className="grid grid-cols-2 md:grid-cols-4 items-center justify-between md:w-[70%] gap-4 md:gap-8"
>
  {techIcons.map(({ Icon, color, delay }, index) => (
    <motion.div
      key={index}
      variants={iconVariants(delay)}
        initial = "initial"
        animate = "animate"
      className="rounded-2xl border-4 justify-center items-center flex border-neutral-800 p-4"
    >
      <Icon className={`text-7xl ${color}`} />
    </motion.div>
  ))}
</motion.div>
    </div>
  )
}

export default Technologies
