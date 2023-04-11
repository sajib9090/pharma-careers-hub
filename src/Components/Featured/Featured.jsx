import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleJobCard from "./SingleJobCard/SingleJobCard";

const Featured = () => {
  // const jobs = useLoaderData();
  const [jobs, setJobs] = useState([]);

  useEffect(()=> {
    fetch(`/Data.json`)
      .then(res => res.json())
      .then(data => setJobs(data))
  },[])

  const [seeAll, setSeeAll] = useState(false);

  const handleSeeAllBtn = () => {
    setSeeAll(true);
  }
  
 return (
    <div className="mt-32 max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-[#1A1919] text-4xl mb-4 font-extrabold">Featured Jobs</h1>
        <p className="text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        { jobs &&
           jobs?.slice(0, seeAll? 6 : 4).map(job => <SingleJobCard key = {job.id} job = {job} />)
        }
      </div>
      <div className="text-center mt-10">
         { !seeAll && 
            <button onClick={handleSeeAllBtn} className="btn capitalize bg-gradient-to-r from-[#9873FF] border-none px-8">See All Jobs</button>
         }
      </div>
    </div>
  );
};

export default Featured;
