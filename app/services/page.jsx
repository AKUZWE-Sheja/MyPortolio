"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web and Mobile Development',
    description: "Creating responsive and user-friendly web applications and mobile apps tailored to meet your personal & business needs. Leveraging the latest technologies to ensure optimal performance and seamless user experiences.",
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: "Designing intuitive user interfaces and engaging user experiences that enhance usability and satisfaction. My approach combines creativity with user-centered design principles to deliver visually appealing and functional designs.",
    href: '',
  },
  {
    num: '03',
    title: 'Logo and Brand Identity Design',
    description: "Crafting unique logos and brand identities that resonate with your target audience. I focus on creating memorable designs that communicate your brand's values and vision effectively.",
    href: '',
  },
  {
    num: '04',
    title: 'Project Management & Coordination',
    description: "Providing structured project management and coordination services to ensure successful project execution. I focus on planning, scheduling, and communication to keep your projects on track, within scope, and within budget.",
    href: '',
  },
  {
    num: '05',
    title: 'Technical Consulting & Advisory',
    description: "Offering expert advice and guidance on technology choices, development strategies, and best practices to help you achieve your business objectives. My consulting services are tailored to align your technical needs with your business goals.",
    href: '',
  },
  {
    num: '06',
    title: 'Content Creation & Technical Writing',
    description: "Creating clear, engaging, and informative content for your digital platforms. I specialize in technical writing, documentation, and creating content that resonates with your audience and enhances your online presence.",
    href: '',
  },
];


import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
                >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45 ">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services