// Portfolio.js
import React from 'react';
import Home from './components/Home';
import Typewriter from 'typewriter-effect';

const portfolio = () => {
  return (
    <>
      <Home/>
      <div className="bg-gradient-to-r from-slate-500 to-yellow-600 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white">Our Skill</h1>
        <h2 className="text-xl text-center text-gray-200 mt-2 ">
          <Typewriter
            options={{
              strings: ['I am a Web Developer', 'I am a Video Editor', 'I am a Frontend Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 bg-slate-400">
          <div className="p-4 rounded-lg shadow-md text-center bg-black">
            <h3 className="font-semibold">HTML</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="font-semibold">CSS</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="font-semibold">JavaScript</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="font-semibold">React</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="font-semibold">Content Writing</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default portfolio;
