import React from "react";
import Image from "../assets/avatar1.png";

import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div className=" flex items-center min-h-[85vh] md:min-h-[78vh]" id="home">
      <div className=" container mx-auto">
        <div className=" flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-12">
          <div className=" flex-1 text-center font-secondary lg:text-left">
            <motion.h1 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}} className=" text-[55px] font-bold leading-[0.8] lg:text-[89px]">
              Hi, <span>There</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className=" mb-6 text-2xl md:text-[50px] font-secondary font-bold uppercase leading-[1]">
              <span className=" mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Fullstack Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>
            <motion.p
            variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}} className=" mb-8 max-w-lg mx-auto md:mx-0">
              Hi, there its me jahid ., I am a web debveloper
            </motion.p>
            <motion.div variants={fadeIn('up',0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}} className=" flex max-w-max gap-x-6  gap-4 justify-start items-center mb-12 mx-auto md:mx-0">
              <button className=" btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div 
            variants={fadeIn('up',0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}} className=" flex text-3xl gap-x-6 max-w-max mx-auto md:mx-0">
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
          variants={fadeIn('down',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}>
            <img src={Image} alt="img"></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
