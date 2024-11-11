import React from 'react';

const Contact = () => {
  return (
    <div className="px-5 mt-32 flex flex-col justify-center items-center text-white">
      <div className="flex items-center text-2xl border-b-2 border-red-600">
        <h1>Contact</h1>
      </div>
      <div className="py-5 w-1/2 text-xl flex items-center justify-center text-center">
        <p>
          I am currently seeking employment, so if you have a job or project offer, or if you need more information, please do not hesitate to contact me.
        </p>
      </div>
      
      <div className="flex flex-row gap-5">
        <a href="https://github.com/MHassaanQureshi" target="_blank" rel="noopener noreferrer">
          <img src="images/github-sign (1).png" alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-hassaan-qureshi-2202a9257/" target="_blank" rel="noopener noreferrer">
          <img src="images/linkedin (1).png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://www.facebook.com/hassaan.haroon.568?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <img src="images/facebook.png" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/muhammad_.hassaan_?igsh=MXFsOHZkNTFlMDd3ZQ==" target="_blank" rel="noopener noreferrer">
          <img src="images/instagram.png" alt="Instagram" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
