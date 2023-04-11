import React from "react";


const Footer = () => {
  return (
    <div className="bg-[#1A1919] md:h-[55vh] mt-32 text-white px-4 md:px-8">
      <div className="grid grid-cols-12 max-w-7xl mx-auto">
        <div className=' h-[45vh] col-span-9 md:col-span-4 flex flex-col justify-center'>
             <h3 className="text-3xl font-extrabold mb-5">pharmaCareersHub</h3>
             <p>Discover your dream career. Browse thousands of job opportunities on our comprehensive job website. Get hired today!</p>
             <img className="w-[150px] mt-4" src="https://i.ibb.co/tsYRq3t/Group-9969.png" alt="" />
            
        </div>
        <div className=' h-[45vh] col-span-4 md:col-span-2 flex flex-col justify-center space-y-4'>
            <h2 className="text-lg font-semibold">Company</h2>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
        </div>
        <div className='h-[45vh] col-span-4 md:col-span-2 flex flex-col justify-center space-y-4'>
        <h2 className="text-lg font-semibold">Product</h2>
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
        </div>
        <div className=' h-[45vh] col-span-4 md:col-span-2 flex flex-col justify-center space-y-4'>
        <h2 className="text-lg font-semibold">Support</h2>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
        </div>
        <div className='h-[45vh] col-span-5 md:col-span-2 flex  flex-col justify-center space-y-4 md:pb-[80px]'>
        <h2 className="text-lg font-semibold">Contact</h2>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="border-t border-[#6e6e6e] flex flex-col md:flex-row justify-between items-center h-[10vh] max-w-7xl mx-auto">
        <small>@2023 pharmaCareersHub. All Rights Reserved</small>
        <small>Powered by pharmaCareersHub</small>
      </div>
    </div>
  );
};

export default Footer;
