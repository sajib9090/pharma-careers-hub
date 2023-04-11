import React from "react";
import { getShoppingCart } from "../../../utilities/fakedb";


const AppliedJob = () => {
  
 const appliedJob = getShoppingCart();
 for(const id in appliedJob){
  console.log(id);
 }

  return (
    <>
      <div className="bg-[#9873ff53]">
        <div className="text-center py-16 mb-10 max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold">Applied Job</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-right">
          <select className="border border-gray-300 rounded-lg py-2 px-4">
            <option disabled selected>
              Filter By
            </option>
            <option>Remote</option>
            <option>Onside</option>
          </select>
        </div>

        <div className="flex items-center border border-gray-300 my-3 rounded-lg p-4">
          <div className="px-4 py-2">
            <img src="https://i.ibb.co/FBQFZ64/moderna.png" />
          </div>
          <div>
            <div className="mb-5">
              <h3 className="text-[#474747] text-2xl font-bold mb-2">Technical Database Engineer</h3>
              <p className="text-[#757575] font-semibold">Google LLC</p>
            </div>
            <div>
                <button className="text-[#9873FF] border border-[#9873FF] rounded-md px-4 py-1">Remote</button>
                <button className="text-[#9873FF] border border-[#9873FF] rounded-md px-4 py-1 ml-4">On-side</button>
            </div>
            <div className="flex items-center my-4">
                <p>Dhaka, Bangladesh</p>
                <p className="ml-6">Salary</p>
            </div>
          </div>
          <div className="ml-auto">
            <button className="bg-[#9873FF] px-4 py-2 rounded-lg text-white duration-500 hover:bg-[#60499e]">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliedJob;
