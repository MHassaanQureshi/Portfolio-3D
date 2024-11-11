"use client";
import About from "../components/About/About";

import { motion } from "framer-motion";

export default function Aboutpage(){
    return(
        <>
        <div id="AboutSec">
        <motion.div
        className="w-[100%] lg:-mt-20  sm:mt-24  rounded-lg shadow-lg " 
        id="about"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>
      </div>
        </>
    )
}