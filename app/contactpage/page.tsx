"use client";
import { motion } from "framer-motion";
import Contact from "../components/contact/Contact";
export default function Contactpage(){
    return(
        <motion.div
        className="w-[100%] flex flex-col items-center lg:mt-12 justify-center  sm:mt-24 p-6  rounded-lg shadow-lg " 
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    )
}