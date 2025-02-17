import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-[#FFFCF5] py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-12 md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-light text-gray-900">ABOUT US</h2>
        <p className="text-lg md:text-xl text-gray-700 font-semibold mt-3 font-inter">
          Passionate About Serving Fresh & Convenient Food Delivery.
        </p>
        <p className="text-gray-600 text-md md:text-lg leading-relaxed mt-4 font-mono">
        At <strong>JLDSSS</strong>, we make ordering food from your favorite restaurants effortless. With a seamless online platform, we connect you to the best eateries in town, ensuring fresh and hot meals delivered straight to your doorstep.
        </p>
        <p className="text-lg text-gray-700 mt-2 font-mono">
          Whether you're craving comfort food or healthy meals, our efficient delivery service ensures that your order arrives on time, every time. Enjoy hassle-free dining with just a few clicks!
        </p>
        <button className="mt-6 flex items-center space-x-2 px-6 py-3 text-lg font-semibold text-gray-900 border-[#32CD32] border bg-white rounded-full group hover:bg-[#32CD32] cursor-pointer transition-all">
          <span>Explore Menu</span>
          <span className="bg-[#32CD32] text-white group-hover:bg-white group-hover:text-[#32CD32] w-8 h-8 flex items-center justify-center rounded-full font-bold">→</span>
        </button>
      </div>
      
      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src="/src/assets/about.png" alt="Healthy Food Bowl" className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-full shadow-lg" />
      </div>
    </section>
  );
};

export default About