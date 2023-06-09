import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import {
    CurrencyDollarIcon,
    CalendarDaysIcon,
    PhoneIcon,
    AtSymbolIcon,
    MapPinIcon,
    ArrowLeftCircleIcon
  } from "@heroicons/react/24/solid";

const ViewDetails = () => {
    const navigate = useNavigate()
    const viewDetailsJob = useLoaderData();
    const {viewId} = useParams();

    const finding = viewDetailsJob.find(vdj => vdj.id === viewId);
    const {
        id,
        salary,
        job_description,
        job_responsibility,
        educational_requirements,
        experience,
        job_title,
        phone,
        email,
        location,
        img,
      } = finding;
    
    return (
        <>
        <div className="bg-[#926ef624]">
        <div className="text-center py-16 mb-10 max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold">Job Details</h2>
        </div>
        </div>
        <div className=" max-w-7xl mx-auto px-4 md:px-8">
      <div>
        <div className='flex justify-center'>
        <img className='w-[300px]' src={img} alt="" />
        </div>
         <p className="text-[#676767] pb-5 pt-4"><span className="font-bold text-black">Job Description:</span> {job_description}</p>
         <p className="text-[#676767] pb-5 pt-4"><span className="font-bold text-black">Job Responsibility:</span> {job_responsibility}</p>
         <p className="text-[#676767] pb-5 pt-4"><span className="font-bold text-black">Educational Requirements:</span> {educational_requirements}</p>
         <p className="text-[#676767] pb-5 pt-4"><span className="font-bold text-black">Experience:</span> {experience}</p>
      </div>
      <div className="flex flex-col rounded-lg">
        <div>
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-4 w-4 text-[#9873FF]" />
            <p className="text-[#626262] mb-3 mt-5">
              <span className="font-bold ml-2 text-black">Salary:</span>{" "}
              {salary}
            </p>
          </div>
          <div className="flex items-center">
            <CalendarDaysIcon className="h-4 w-4 text-[#9873FF]" />
            <p className="text-[#626262]"><span className="font-bold ml-2 text-black">Job Title:</span> {job_title}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <PhoneIcon className="h-4 w-4 text-[#9873FF]" />
            <p className="text-[#626262] mb-3 mt-5">
              <span className="font-bold ml-2 text-black">Phone:</span>
              {phone}
            </p>
          </div>
          <div className="flex items-center">
            <AtSymbolIcon className="h-4 w-4 text-[#9873FF]" />
            <p className="text-[#626262]"><span className="font-bold ml-2 text-black">Email:</span> {email}</p>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-4 w-4 text-[#9873FF]" />
            <address className="text-[#626262] my-2"><span className="font-bold ml-2 text-black">Address:</span> {location}</address>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto text-center pt-6"><button onClick={()=> navigate(-1)}><ArrowLeftCircleIcon className="h-10 w-10 text-[#9873FF] hover:text-[#6950ae] duration-300"/></button></div>
    </>
    );
};

export default ViewDetails;