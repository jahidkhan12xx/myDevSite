import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import animation from "../assets/Animation - 1702384780821.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className=' section' id='about'>
      <div className=' container mx-auto flex justify-center items-center'>
        <div className=' max-w-[50%]'>
        <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" font-bold text-6xl"
            >
              # About Me
            </motion.h2>
            
            <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
             className=" w-[450px]">
            <Lottie animationData={animation}></Lottie>
          </motion.div>
        </div>
        <div>
        <motion.p className=" mt-12 "
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am a not someone like some genius student in my past days. I like exploring tech industry rather than studying curriculam books . But I love to learn new technologies. 
            </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
