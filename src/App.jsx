// Portfolio.js
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

const Portfolio = () => {
    return (
      <>
      <Navbar/>
      <Home/>
        <div className=" p-8 rounded-lg shadow-lg bg-orange-500 text-white ">
            <h1 className="text-4xl font-bold text-center  text-white">Our Skill</h1>
            <h2 className="text-xl text-center text-gray-600 mt-2">I am a Web Developer and Content Developer</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-black">HTML</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-black">CSS</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-black">JavaScript</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-black">React</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-black">Content Writing</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-black">Next js</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-black">Express js</h3>
                </div>
            </div>
        </div>
        
    
        </>
    );
};

export default Portfolio;
