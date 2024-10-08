"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiArduino } from "react-icons/si";

const about = {
  title: "About Me",
  description: "A dedicated full-stack developer with a passion for building efficient, user-centric software solutions that drive innovation and growth. I am always eager to take on new challenges and learn from each experience.",
  info: [
    { 
      fieldName: "Name", 
      fieldValue: "Akuzwe Sheja Edwige" 
    },
    { 
      fieldName: "Phone", 
      fieldValue: "(+250) 787 014 425" 
    },
    { 
      fieldName: "Experience", 
      fieldValue: "2+ Years" 
    },
    { 
      fieldName: "Nationality", 
      fieldValue: "Rwandan" 
    },
    { 
      fieldName: "Freelance", 
      fieldValue: "Available" 
    },
    { 
      fieldName: "Email", 
      fieldValue: "edwigeakuzwe6@gmail.com" 
    },
    {
      fieldName: "LinkedIn",
      fieldValue: (
        <a href="www.linkedin.com/in/edwige-akuzwe-50779a261" target="_blank" rel="noopener noreferrer">
          edwige-sheja
        </a>
      ),
    },
    { 
      fieldName: "Languages", 
      fieldValue: "Kinyarwanda, English, French, Kiswahili, Chinese" 
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'A brief overview of my professional journey, showcasing my expertise in development, design, and community service.',
  items: [
    {
      company: "The Green Protector",
      position: "Environment Education Research & Content Development Intern",
      duration: "Summer 2024 - Present",
    },
    {
      company: "Novars Startup",
      position: "Mobile Developer & UI/UX Designer",
      duration: "2024",
    },
    {
      company: "Vivaa Startup",
      position: "UI/UX Designer",
      duration: "Summer 2024",
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'My academic background, which has equipped me with the technical skills and knowledge needed for success in the tech industry.',
  items: [
    {
      institution: "Rwanda Coding Academy",
      degree: "Software Programming & Embedded Systems Diploma",
      duration: "2022 - Present",
    },
    {
      institution: "CODE University of Applied Sciences",
      degree: "Ideation & Prototyping Certificate",
      duration: "2024",
    },
    {
      institution: "GirlsWhoCode",
      degree: "Data Science Certificates",
      duration: "2024",
    },
    {
      institution: "School Of Humanity",
      degree: "Creating Virtual Worlds With Honors",
      duration: "2024",
    },
    {
      institution: "Sololearn",
      degree: "Sololearn Python Developer Certificate",
      duration: "2023",
    },
  ]
}

const skills = {
  title: "My skills",
  description: "A comprehensive set of technical skills developed through diverse projects and hands-on experience.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "Javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <SiArduino/>,
      name: "arduino",
    },
    {
      icon: <FaPython/>,
      name: "python",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
    {
      icon: <FaPhp/>,
      name: "php",
    },
    {
      icon: <FaJava/>,
      name: "java ",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul>
                    {experience.items.map((item, index) => {
                      return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[3000px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/*dot  */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul>
                    {education.items.map((item, index) => {
                      return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/*dot  */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map ((skills, index) => {
                  return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skills.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skills.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                  );
                })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 ">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                  <li 
                    key={index}
                    className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                  );
                })}
              </ul>
            </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume