"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'; 
import "swiper/css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import WorkSliderBtns from "@/components/WorkSlideBtns"; 

// Data for poetry, publications, and certificates
const poetry = {
  title: "Dignity In Words",
  description: "Expressing thoughts and emotions through poetic works that reflect life's beauty and struggles.",
  items: [
    { 
      fieldName: "Crimson", 
      image: '/assets/crimson.png',
    },
    { 
      fieldName: "The Storm Within", 
      image: '/assets/storm.png',
    },
    { 
      fieldName: "Crimson", 
      image: '/assets/crimson.png',
    },
    { 
      fieldName: "The Storm Within", 
      image: '/assets/storm.png',
    },
  ],
};

const publications = {
  title: "Published Articles",
  description: "Articles and papers covering topics in technology, education, and social impact.",
  items: [
    { 
      fieldName: "The Power of VR in Education", 
      image: '/assets/crimson.png',
    },
    { 
      fieldName: "Empowering Women through Technology", 
      image: '/assets/crimson.png',
    },
    { 
      fieldName: "Sustainable Tech Innovations", 
      image: '/assets/crimson.png',
    },
  ],
};

const certificates = {
  title: "Certificates",
  description: "Professional certifications and achievements in various technical and non-technical domains.",
  items: [
    { 
      fieldName: "Google Analytics", 
      image: '/assets/crimson.png',
    },
    { 
      fieldName: "AWS Certified Developer", 
      image: '/assets/crimson.png',
    },
    { 
      fieldName: "Full-Stack Developer", 
      image: '/assets/crimson.png',
    },
  ],
};

const Interests = () => {
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
          defaultValue="poetry"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="poetry">Poetry</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* poetry */}
            <TabsContent value="poetry" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{poetry.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{poetry.description}</p>
                <ScrollArea className="h-[500px]">
                  <ul>
                    {poetry.items.map((item, index) => {
                      return (
                        <SwiperSlide key={index} className="w-full mb-8">
                        <h3 className="mb-2 text-accent">{item.fieldName}</h3>
                        <div className="h-[480px] relative group flex justify-center items-center">
                          {/* Image */}
                          <div className="relative w-[50%] h-full">
                            
                            <Image 
                              src={item.image}
                              fill
                              className="object-cover"
                              alt={item.fieldName}  
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* publications */}
            <TabsContent value="publications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{publications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{publications.description}</p>
                <ScrollArea className="h-[500px]">
                  <ul>
                    {publications.items.map((item, index) => {
                      return (
                        <SwiperSlide key={index} className="w-full mb-8">
                        <h3 className="mb-2  text-accent">{item.fieldName}</h3>
                        <div className="h-[480px] relative group flex justify-center items-center">
                          {/* Image */}
                          <div className="relative w-[50%] h-full">
                            
                            <Image 
                              src={item.image}
                              fill
                              className="object-cover"
                              alt={item.fieldName}  
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* certificates */}
            <TabsContent value="certificates" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certificates.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certificates.description}</p>
                <ScrollArea className="h-[500px]">
                  <ul>
                    {certificates.items.map((item, index) => {
                      return (
                        <SwiperSlide key={index} className="w-full mb-8">
                        <h3 className="mb-2  text-accent">{item.fieldName}</h3>
                        <div className="h-[480px] relative group flex justify-center items-center">
                          {/* Image */}
                          <div className="relative w-[50%] h-full">
                            
                            <Image 
                              src={item.image}
                              fill
                              className="object-cover"
                              alt={item.fieldName}  
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Interests;
