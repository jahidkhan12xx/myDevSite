import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import animation from "../assets/Animation - 1702385464153.json";
import Lottie from "lottie-react";

const Projects = () => {
    return (
        <div className=' section' id="projects">
            <div className=" container mx-auto flex justify-between">
                <div className=" max-w-[50%]">
                <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" font-bold text-6xl"
            >
              # What work I did ?
            </motion.h2>
            <motion.p className=" mt-12 "
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am a not someone like some genius student in my past days. I like exploring tech industry rather than studying curriculam books . But I love to learn new technologies. 
            </motion.p>
            <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} className=" w-[450px]">
            <Lottie
             animationData={animation}></Lottie>
          </motion.div>
                </div>
                <motion.div variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className=" mt-32 flex gap-8 flex-col">
                    <div>
                        <h2 className=" text-3xl font-bold">Employee Management Project</h2>
                        <p className=" text-2xl font-light">Live Link : <a className=" underline text-blue-red-500" href="https://programming-booth.web.app/">Click Here</a> </p>
                        <p className=" text-2xl font-light">Github Link :  <a className=" underline text-blue-red-500" href="https://github.com/jahidkhan12xx/Employee-Management-Project-Client">Click Here</a></p>
                    </div>
                    <div>
                        <h2 className=" text-3xl font-bold">Hotel Booking Project</h2>
                        <p className=" text-2xl font-light">Live Link : <a className=" underline text-blue-red-500" href="https://assignment-11-7ddcc.web.app/">Click Here</a></p>
                        <p className=" text-2xl font-light">Github Link : <a className=" underline text-blue-red-500" href="https://github.com/jahidkhan12xx/roombooking">Click Here</a></p>
                    </div>
                    <div>
                        <h2 className=" text-3xl font-bold">Brand-shop Management Project</h2>
                        <p className=" text-2xl font-light">Live Link : <a className=" underline text-blue-red-500" href="https://brand-shop-4b959.web.app/">Click Here</a></p>
                        
                        <p className=" text-2xl font-light">Github Link : <a className=" underline text-blue-red-500" href="https://github.com/jahidkhan12xx/brandShop">Click Here</a></p>
                    </div>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;