import React from 'react';


const Hero = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row max-w-7xl mx-auto px-4 mt-8 md:px-8 w-full'>
            <div className='w-full flex flex-col justify-center h-screen md:h-[600px]'>
                <h1 className='text-5xl md:text-6xl font-bold max-w-md'>One Step <br />Closer To Your <br/><span className='text-[#7E90FE]'>Dream Job</span></h1>
                <p className='mt-5 mb-6 text-[ #757575] max-w-sm'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div>
                <button className='btn hover:bg-[#5a429c] bg-[#9873FF] border-none'>Get Started</button>
                </div>
            </div>
            <div className='w-full'>
            <img className='object-cover w-[100%] h-screen md:h-[600px]' src="https://i.ibb.co/Xy42Whj/sajibhossain.png" alt="" />    
            </div>    
        </div>
    );
};

export default Hero;