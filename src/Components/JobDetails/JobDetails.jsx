import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  AtSymbolIcon,
  MapPinIcon
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const jobDetails = useLoaderData([]);
  // console.log(jobDetails);

  const { jobId } = useParams();
  // console.log(jobId);

  const fetching = jobDetails.find((jd) => jd.id === jobId);
  const {
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experience,
    job_title,
    phone,
    email,
    location,
  } = fetching;

  return (
    <div className="">
        <div className="bg-[#9873ff53]">
        <div className="text-center py-16 mb-10 max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold">Job Details</h2>
        </div>
        </div>
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-4 md:px-8">
      <div className=" col-span-12 md:col-span-9">
         <p className="text-[#676767] pb-5 pt-4"><span className="font-bold text-black">Job Description:</span> {job_description}</p>
         <p className="text-[#676767] pb-5 pt-4"><span className="font-bold text-black">Job Responsibility:</span> {job_responsibility}</p>
         <p className="text-[#676767] pb-5 pt-4"><span className="font-bold text-black">Educational Requirements:</span> {educational_requirements}</p>
         <p className="text-[#676767] pb-5 pt-4"><span className="font-bold text-black">Experience:</span> {experience}</p>
      </div>
      <div className="bg-[#9873ff53] col-span-12 md:col-span-3 px-6 flex flex-col rounded-lg">
        <h3 className="text-[20px] font-extrabold my-6">Job Details</h3>
        <hr className="text-[#9873FF]" />

        <div>
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-4 w-4 text-[#9873FF]" />
            <small className="text-[#626262] mb-3 mt-5">
              <span className="font-bold ml-2 text-black">Salary:</span>{" "}
              {salary}
            </small>
          </div>
          <div className="flex items-center">
            <CalendarDaysIcon className="h-4 w-4 text-[#9873FF]" />
            <small className="text-[#626262]"><span className="font-bold ml-2 text-black">Job Title:</span> {job_title}</small>
          </div>
        </div>
        <h3 className="text-[20px] font-extrabold my-6">Contact Information</h3>
        <hr className="text-[#9873FF]" />
        <div className="mt-5 mb-9">
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
        <button className="bg-[#9873FF] text-white py-2 rounded-lg my-4">
          Apply Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default JobDetails;
