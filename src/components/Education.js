import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import animation from "../assets/Animation - 1702381929914.json";
import Lottie from "lottie-react";


const Education = () => {
    return (
        <div className=' section' id="education">
            <div className=" container mx-auto md:flex justify-between gap-4 ">
               <div className="md:max-w-[50%]">
               <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" font-bold text-3xl md:text-6xl"
            >
              # Education
            </motion.h2>
            <motion.p className=" mt-12 "
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am a not someone like some genius student in my past days. I like exploring tech industry rather than studying curriculam books . But I love to learn new technologies. 
            </motion.p>
            <div className=" w-[450px]">
            <Lottie animationData={animation}></Lottie>
          </div>
                </div> 
               <motion.div
               variants={fadeIn("left", 0.5)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }} className=" mt-20">
                <div className=" my-4">
                    <h2 className=" text-3xl font-thin">High-School</h2>
                    <h2 className=" text-3xl font-bold">Atkoshi High School , Rajshahi</h2>
                    <p className="text-2xl">SSC:2014</p>
                    <p className="text-2xl">Result : GPA - 5/5</p>
                </div>
                <div className=" my-4">
                    <h2 className=" text-3xl font-thin">College</h2>
                    <h2 className=" text-3xl font-bold">Rajshahi Govt. Shikkha Board Model School & college , Rajshahi</h2>
                    <p className="text-2xl">SSC:2016</p>
                    <p className="text-2xl">Result : GPA - 5/5</p>
                </div>
                <div className=" my-4">
                    <h2 className=" text-3xl font-thin">University</h2>
                    <h2 className=" text-3xl font-bold">Green University of Bangladesh , Dhaka</h2>
                    <p className="text-2xl">Session:2018-2023</p>
                    <p className="text-2xl">Result : N/A</p>
                </div>
                </motion.div> 
            </div>
        </div>
    );
};

export default Education;