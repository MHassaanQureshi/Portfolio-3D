"use client";

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true, 
    });
  }, []);

  return (
    <Home />
  );
};

export default Homepage;
