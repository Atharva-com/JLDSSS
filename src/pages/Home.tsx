import React from 'react';
import logo from "../assets/banner.png";
import restaurant from "../assets/restaurant.png";
// import {data} from '../restApi.json'

const Home: React.FC = () => {

  return (
    <div className='p-4 max-w-[1400px] mx-auto mt-28'>

        <div className='grid sm:grid-cols-2 gap-4'>
            <img src={logo} className='rounded-2xl h-full object-cover' />
            <img src={restaurant} className='rounded-2xl h-full object-cover' />
        </div>

        <div className='rounded-tr-lg rounded-bl-lg bg-gradient-to-l from-green-400 to-green-600 mt-8 h-[40px]
                        flex items-center justify-start my-8 '>
            <h1 className='text-3xl font-bold pl-8 text-white text-inter tracking-wide'>Popular Dishes</h1>
        </div>

        {/* <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div> */}
    </div>
  )
}

export default Home