import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const AppliedJobCard = ({selectedJob}) => {
  // console.log(selectedJob);
  const {img, title, id, brand, job_category, job_type, location, salary} = selectedJob;  
  return (
    <>
     <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="md:flex items-center border border-gray-300 my-3 rounded-lg p-4">
          <div className="px-4 py-2">
            <img className="w-[240px] mr-4" src={img} />
          </div>
          <div>
            <div className="mb-5">
              <h3 className="text-[#474747] text-2xl font-bold mb-2">
                {title}
              </h3>
              <p className="text-[#757575] font-semibold">{brand}</p>
            </div>
            <div>
              <button className="text-[#9873FF] border border-[#9873FF] rounded-md px-4 py-1">
                {job_type}
              </button>
              <button className="text-[#9873FF] border border-[#9873FF] rounded-md px-4 py-1 ml-4">
                {job_category}
              </button>
            </div>
            <div className="flex items-center my-4">
              <MapPinIcon className="h-4 w-4 text-[#9873FF]" />
              <p className="ml-2 mr-6">{location}</p>
              <CurrencyDollarIcon className="h-4 w-4 text-[#9873FF]" />
              <p className="ml-2">{salary}</p>
            </div>
          </div>
          <div className="ml-auto">
            <Link to={`../viewDetails/${id}`}><button className="bg-[#9873FF] px-4 py-2 rounded-lg text-white duration-500 hover:bg-[#60499e]">
              View Details
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliedJobCard;
