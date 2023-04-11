import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../../utilities/fakedb";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";

const AppliedJob = () => {
  const appliedJob = getShoppingCart();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/Data.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let appliedId = [];

  for (const id in appliedJob) {
    const foundJob = data.find((d) => d.id === id);
    if (foundJob) {
      appliedId.push(foundJob);
    }
  }

  return (
    <>
      <div className="bg-[#9873ff53]">
        <div className="text-center py-16 mb-10 max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold">Applied Job</h2>
        </div>
      </div>
      <div className="text-right">
          <select className="border border-gray-300 rounded-lg py-2 px-4">
            <option disabled selected>
              Filter By
            </option>
            <option>Remote</option>
            <option>Onside</option>
          </select>
        </div>
      {appliedId.map((selectedJob, index) => (
        <AppliedJobCard key={index} selectedJob={selectedJob} />
      ))}
    </>
  );
};

export default AppliedJob;
