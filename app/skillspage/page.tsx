"use client";
import { motion } from "framer-motion";

import Skill from "../components/Skills/Skill";
export default function Skillspage(){
    return(
        <motion.div
        className="w-[100%] flex flex-col items-center lg:mt-12 sm:mt-24 p-6 rounded-lg shadow-lg" 
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl border-b-2 border-red-500 text-white p-2 font-extrabold text-center">Skills</h1>
        <div className="flex flex-col mt-24 gap-10 w-full items-center">
          
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/html.png" name="HTML" about="I have strong HTML5 skills, demonstrated through projects like a portfolio, eCommerce site, and resume generator. My work focuses on clean, semantic code and responsive design." />
            <Skill img="/images/css-3.png" name="CSS" about="I have strong CSS skills, demonstrated through projects like my portfolio and an eCommerce site. I focus on responsive design using frameworks like Bootstrap and Tailwind." />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/java-script.png" name="JavaScript" about="I have solid JavaScript skills, showcased in projects like an interactive portfolio and an e-commerce. I excel in creating dynamic user experiences and efficient functionality." />
            <Skill img="/images/typescript.png" name="TypeScript" about="I have strong TypeScript skills, demonstrated through projects like a resume generator and a dynamic web application. I focus on building robust, type-safe code that enhances maintainability and scalability." />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/Bootstrap.png" name="Bootstrap" about="I have strong Bootstrap skills, demonstrated through various projects. I excel in creating responsive, mobile-first designs that enhance user experience. My focus is on utilizing Bootstrap's components to streamline development." />
            <Skill img="/images/python.png" name="Python" about="I have solid Python skills, with experience in Tkinter and Pygame. I created an image viewer, focusing on building user-friendly applications and enhancing my problem-solving abilities." />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/physics.png" name="React-JS" about="I am learning React, demonstrated through my portfolio website built with the framework. I focus on creating dynamic, interactive user interfaces and improving my component-based development skills." />
            <Skill img="/images/nextjs-icon.png" name="Next-JS" about="I have strong CSS skills, demonstrated through projects like my portfolio and an eCommerce site. I focus on responsive design using frameworks like Bootstrap and Tailwind." />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/Tailwind CSS.png" name="Tailwind CSS" about="I have strong Tailwind CSS skills, demonstrated through various projects. I excel in creating responsive designs quickly with utility-first classes, focusing on maintainability and customizability." />
            <Skill img="/images/github-sign.png" name="GitHub" about="I have solid GitHub skills, demonstrated through effective version control and collaboration on various projects. I focus on maintaining clean commit histories and utilizing branches for efficient workflows." />
          </div>
        </div>
      </motion.div>

    )
}