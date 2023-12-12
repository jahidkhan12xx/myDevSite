import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import animation from "../assets/Animation - 1702379415277.json";
import Lottie from "lottie-react";
import StarRatings from "react-star-ratings";

const Skills = () => {
  return (
    <div className=" section" id="skills">
      <div className=" container mx-auto flex justify-between">
        <div className=" flex justify-center items-center flex-col">
          <div>
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" font-bold text-6xl"
            >
              # What Do I Know
            </motion.h2>
            <motion.p className=" my-12"
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am a MERN stack based Web Developer
            </motion.p>
          </div>

          <div className=" w-[500px]">
            <Lottie animationData={animation}></Lottie>
          </div>
        </div>
        <div className=" mt-52 flex justify-center items-center gap-2 flex-col text-xl font-semibold ">
          <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className=" flex justify-center items-center flex-col gap-2">
            <h2>React JS</h2>
            <StarRatings
              rating={4}
              starDimension="40px"
              starSpacing="15px"
            />
          </motion.div>
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className=" flex justify-center items-center flex-col gap-2">
            <h2>Javascript</h2>
            <StarRatings
              rating={3.603}
              starDimension="40px"
              starSpacing="15px"
            />
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className=" flex justify-center items-center flex-col gap-2">
            <h2>Node JS</h2>
            <StarRatings
              rating={3.403}
              starDimension="40px"
              starSpacing="15px"
            />
          </motion.div>
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className=" flex justify-center items-center flex-col gap-2">
            <h2>Express</h2>
            <StarRatings
              rating={3.403}
              starDimension="40px"
              starSpacing="15px"
            />
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className=" flex justify-center items-center flex-col gap-2">
            <h2>MongoDB</h2>
            <StarRatings
              rating={3.403}
              starDimension="40px"
              starSpacing="15px"
            />
          </motion.div>
          {/* <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className=" flex justify-center items-center flex-col gap-2">
            <h2>HTML</h2>
            <StarRatings
              rating={4.5}
              starDimension="40px"
              starSpacing="15px"
            />
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className=" flex justify-center items-center flex-col gap-2">
            <h2>CSS</h2>
            <StarRatings
              rating={4.5}
              starDimension="40px"
              starSpacing="15px"
            />
          </motion.div>
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className=" flex justify-center items-center flex-col gap-2">
            <h2>Tailwind CSS</h2>
            <StarRatings
              rating={4.5}
              starDimension="40px"
              starSpacing="15px"
            />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
