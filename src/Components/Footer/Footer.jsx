import React from "react";


const Footer = () => {
  return (
    <div className="bg-[#1A1919] md:h-[55vh] mt-32 max-w-7xl mx-auto text-white px-4 md:px-8">
      <div className="grid grid-cols-12">
        <div className=' h-[45vh] col-span-9 md:col-span-4 flex flex-col justify-center'>
             <h3 className="text-3xl font-extrabold mb-5">pharmaCareersHub</h3>
             <p>Discover your dream career. Browse thousands of job opportunities on our comprehensive job website. Get hired today!</p>
            
        </div>
        <div className=' h-[45vh] col-span-4 md:col-span-2 flex flex-col justify-center space-y-4'>
            <h2 className="text-lg font-semibold">Company</h2>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
        </div>
        <div className='h-[45vh] col-span-4 md:col-span-2 flex flex-col justify-center space-y-4'>
        <h2 className="text-lg font-semibold">Company</h2>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
        </div>
        <div className=' h-[45vh] col-span-4 md:col-span-2 flex flex-col justify-center space-y-4'>
        <h2 className="text-lg font-semibold">Company</h2>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
        </div>
        <div className='h-[45vh] col-span-5 md:col-span-2 flex  flex-col justify-center space-y-4'>
        <h2 className="text-lg font-semibold">Company</h2>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
        </div>
      </div>
      <div className="border-t border-[#6e6e6e] flex flex-col md:flex-row justify-between items-center h-[10vh]">
        <small>@2023 pharmaCareersHub. All Rights Reserved</small>
        <small>Powered by pharmaCareersHub</small>
      </div>
    </div>
  );
};

export default Footer;
