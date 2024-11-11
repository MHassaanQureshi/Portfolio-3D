"use client";
import { motion } from "framer-motion";
import Projects from "../components/projects/Projects";
import Mobile from "../components/Mobile-proj/Mobile";
export default function Projectspage(){
    return(
        <>
        <div id="AboutSec">
        <motion.div
        className="w-[100%] flex flex-col items-center lg:mt-12 sm:mt-24 p-6 rounded-lg shadow-lg" 
        id="project"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl border-b-2 border-red-500 text-white p-2 font-extrabold text-center">Portfolio</h1>
        <div className="flex flex-col mt-24 gap-10 w-full items-center">
          
          <div className="flex flex-wrap justify-center gap-10">
            <Projects img="/images/exclusiveshop.png" about="This eCommerce website, built with HTML, CSS, and JavaScript, offers a user-friendly interface with essential pages like Home, Contact, Login, and Signup. It provides easy navigation for desktop users & is not available on mobile devices." name="Exclusive Shop" link="https://exclusive-shop-web.vercel.app/" />
            <Projects img="/images/resume-generator.png" about="I developed a resume generator using HTML, CSS, and TypeScript that enables users to input their details and create a professional resume. The tool features dynamic form elements for skills, education, and experience, allowing easy customization and PDF export." name="Resume Generator" link="https://hackathon-milestone-500.vercel.app/" />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Mobile img="/images/fb.png" about="I created a Facebook clone using React, which currently includes a home and profile page designed specifically for mobile devices. The home page features a feed of posts, while the profile page displays user information and posts." name="Facebook-Clone" link="https://clone-facebook-three.vercel.app/" />
            <Projects img="/images/singer-portfolio.png" about="I created a singer portfolio website using HTML, CSS, and JavaScript to showcase my music. It features a vibrant design with sections for my bio, discography, and upcoming events, providing an engaging platform for fans." name="Singer Portfolio" link="https://singer-portfolio-kappa.vercel.app/" />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Projects img="/images/dice-game.png" about="I developed a dice game using React that allows players to roll virtual dice and track scores. The game features a clean interface and responsive design, offering an engaging experience for users of all ages." name="Dice Game" link="https://dice-game-react-two.vercel.app/" />
            <Projects img="/images/weather.png" about="I built a weather application using TypeScript that delivers real-time updates based on user input. It features an intuitive interface and utilizes APIs for accurate weather data." name="Weather App" link="https://weather-app-neon-chi-32.vercel.app/" />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Projects img="/images/amazon.png" about="I created an Amazon clone featuring a landing page and login functionality using HTML, CSS. The project showcases a clean design and user-friendly interface, simulating the initial steps of an eCommerce experience." name="Amazon Clone" link="https://amazon-clone-j3fv.vercel.app/" />
            <Mobile img="/images/foody.png" about="I created a basic single-page recipe website in React to practice components and props. It displays a recipe with ingredients, instructions, and a dish image, using reusable components to enhance my React skills." name="Foody Zone" link="https://foody-zone-pi.vercel.app/" />
          </div>
        </div>
      </motion.div>

        </div>
        
        </>
    )
}