"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: "Frontend, UI/UX Design, Logo Design",
    title: "Oculus",
    desccription: "Oculus empowers women-led artistic businesses by enhancing the visibility and accessibility of locally crafted products. I designed the logo, created the website prototype using Figma, and developed the frontend using React.js.",
    stack: [{ name: "ReactJs" }, { name: "Css 3"}, { name: " Illustrator" }, { name: "Figma" }],
    image: '/assets/oc.png',
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Novars",
    desccription: "Novars enhances agriculture through Farm Security, Monitoring, and Automation using embedded systems. We deploy surveillance systems and sensors for real-time monitoring, disease detection, and theft prevention. Automation driven by Embedded Systems and AI increases efficiency by reducing manual labor and resource wastage. As part of my team, I am a mobile developper and UI/UX designer.",
    stack: [{ name: "ReactJs" }, { name: "Css 3"}, { name: " Figma" }],
    image: '/assets/novars.png',
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "UI/UX Design",
    title: "Viva",
    desccription: " I worked on Viva -a mental health app that connects users with therapists and fellow users for support and guidance- in its pitching stage . I contributed to the Figma designs and pitched the concept, focusing on creating a safe and supportive digital space for mental health.",
    stack: [{ name: " Figma" }],
    image: '/assets/vivaa.png',
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "SyncMatery",
    desccription: "I worked as a frontend developer with the SyncMastery team to enhance Rwanda's transportation system by integrating the Tap&Go card with a USSD code for mobile payments. This experience honed my skills in HTML, CSS, and React.js, and introduced me to Python programming.",
    stack: [{ name: "Html5" }, { name: "Css 3"}],
    image: '/assets/oc.png',
    live: "",
    github: "",
  },
  {
    num: "05", //blog
    category: "Full-stack",
    title: "Geety",
    desccription: "Geety is a blog application built with Python, where I explored my passion for blogging. It was a fun project that allowed me to experiment with backend development and content creation.",
    stack: [{ name: "ReactJs" }, { name: "Css 3"}, { name: " Illustrator" }],
    image: '/assets/oc.png',
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Frontend",
    title: "SweetSpot",
    desccription: "SweetSpot is a personal project showcasing a website for cakes and related products, inspired by my dream of having a leisurely book café in the future. It was an enjoyable experience that allowed me to creatively combine my interests in design and web development.",
    stack: [{ name: "Html5" }, { name: "Css 3"}, { name: " Figma" }],
    image: '/assets/sweetspot.png',
    live: "",
    github: "https://github.com/AKUZWE-Sheja/bliss.git",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIdex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIdex]);
  }
  
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.desccription}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* GitHUb button */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""  
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work