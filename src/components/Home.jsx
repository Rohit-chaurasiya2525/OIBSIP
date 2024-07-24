import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <div className='  md:flex  justify-evenly  bg-gradient-to-r from-orange-500 to-gray-800 h-[90vh] items-center'>
                    <div className='md:my-14'>
                        <p className='text-5xl md:my-5 font-bold text-white '></p>
                        <p className='font-thin text-white text-2xl'> I am full Stack Doveloper</p> <p className='text-white text-4xl'>Rohit Chaurasiya</p>
                        <button className='bg-black py-2 text-white w-52 my-7 hover: hover:font-thin hover:bg-slate-800  hover:duration-200 hover:-translate-x-1 '>Download Cv</button>
                        <p className='text-white'></p>
                        <p className='font-sans font-bold text-2xl text-white my-1 w-96'>"Passionate web developer specializing in the MERN stack, crafting engaging and user-friendly digital experiences."

</p>
                      

                    </div>
                    <div>
                        <img className='outline-none' src="kavi.jpeg" height={320} width={300} />
                    </div>

                </div>
            </div>
         
            <div className='flex  justify-evenly flex-row-reverse  my-20 items-center gap-28 bg-gradient-to-t from-orange-600 to-slate-950 '>
                <div>
       <img src="https://tse3.mm.bing.net/th?id=OIP.U8YONcpwCTN6Xcse7GZr5gHaE9&pid=Api&P=0&h=180 " width={490} alt="" />
                </div>
                <div className='w-1/3'>
                   <p className='text-4xl text-gray-200'>About Me!</p>
                   <p className='text-4xl '></p>
                   <p className='text-4xl '></p> <br />
                    <p className='text-gray-200'>Here’s a draft for the “About Me” section of your portfolio:

---

**About Me**

Hello!i am Rohit chaurasiya a passionate web developer specializing in the MERN stack with a keen eye for design and user experience. Currently i m a college student balancing my studies with my love for creating innovative web solutions. My journey in web development began with a fascination for technology and an eagerness to build and design compelling digital experiences.

I enjoy working with React and Tailwind CSS to craft modern, responsive websites and applications. My recent projects include a bookstore website which showcases my skills in creating intuitive user interfaces and seamless user experiences. I’m always eager to take on new challenges and continuously improve my skills in the ever-evolving field of web development.

.</p> <br />
                    <button className='bg-orange-400  py-2 w-60'>Read More!</button>
                </div>
            </div>
        </>
    )
}

export default Home