import React from "react";
import hero1 from '../assets/hero1.png'
import threelines from '../assets/threelines.svg'
import hero2 from '../assets/hero2.png'
import logo from '../assets/8[1].png'


const HeroSection: React.FC = () => {
    return (
        <section
            className="flex flex-col min-h-[80vh] justify-between items-center px-4 md:px-8 py-16"
            id="heroSection"
        >
            <div className="flex max-w-[1200px] flex-wrap">
                {/* Left Banner */}
                <div className="flex-2 flex flex-wrap w-full md:w-2/3">

                    <div className="w-full">
                        <h1 className="text-[6.5rem] md:text-[8.5rem] font-light text-gray-900">Delicious</h1>
                    </div>

                    <div className="flex w-full flex-col-reverse md:flex-row">

                        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                            <img
                                src={hero1}
                                alt="hero"
                                className="w-[250px] h-[335px] md:w-[300px] md:h-[385px]"
                            />
                        </div>

                        <div className="w-full md:w-1/2 text-end md:text-left">

                            <div className="relative w-fit mx-auto md:mx-0">

                                <h1 className="text-[6.5rem] md:text-[8.5rem] font-light text-[#32CD32]">Food</h1>
                                <img
                                    src={threelines}
                                    alt="threelines"
                                    className="absolute right-0 top-0"
                                />
                            </div>

                            <img src={logo} alt="logo" className="mx-auto md:mx-0 w-40 h-40" />

                        </div>

                    </div>

                </div>

                {/* Right Banner */}
                <div className="flex-1 w-full md:w-1/3 text-end hidden md:flex">

                    <div className="w-full">

                        <div className="w-full flex justify-end">
                            <img
                                src={hero2}
                                alt="hero"
                                className="w-[250px] h-[335px] md:w-[300px] md:h-[385px] text-end"
                            />
                        </div>

                        <h1 className="text-[6.5rem] md:text-[8.5rem] font-light">Delivery</h1>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;