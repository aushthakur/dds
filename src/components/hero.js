import React, { useState } from 'react';
import image from '../img/Home (1).png';
import { FaLinkedin, FaInstagram, FaTelegram, FaFacebook, FaTwitter, FaTimes } from 'react-icons/fa';

const Hero = () => {
  const [showCookies, setShowCookies] = useState(true);

  const handleCloseCookies = () => {
    setShowCookies(false);
  };

  return (
    <section className="bg-black text-white py-20 relative h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center brightness-110 opacity-70" style={{ backgroundImage: 'url(/hero.jpg)' }}></div>
      <div className="relative z-10 container mx-auto px-4 flex justify-between items-center -mt-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-left">
            Empower Your Business With Building <span className="text-blue-500">Digital Presence</span> and <span className="text-blue-500">Brand Identity</span>.
          </h1>
          
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Get a Quote
          </button>

          <div className="mt-8">
            <img src={image} alt="Your Image Description" className="w-60 max-w-md rounded-lg shadow-lg" />
          </div>
          {showCookies && (
            <div className="bg-gray-800 bg-opacity-80 p-4 rounded-md flex items-center justify-between mt-4 ml-auto">
              <p className="text-white">This website uses cookies. By continuing to use this site, you agree to our use of cookies.</p>
              <button onClick={handleCloseCookies} className="text-white ml-2">
                <FaTimes />
              </button>
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaTelegram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
