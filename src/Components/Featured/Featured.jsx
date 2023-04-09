import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleJobCard from "./SingleJobCard/SingleJobCard";

const Featured = () => {

  const jobs = useLoaderData();
  return (
    <div className="mt-32">
      <div className="text-center">
        <h1 className="text-[#1A1919] text-4xl mb-4 font-extrabold">Featured Jobs</h1>
        <p className="text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {
           jobs.map(job => <SingleJobCard key = {job.id} job = {job}/>)
        }
      </div>
    </div>
  );
};

export default Featured;
