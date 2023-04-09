import React from "react";

const JobCard = (props) => {
  const {img, title, vacancy} = props;
  return (
    <div className="h-[240px] rounded-lg bg-gray-100 flex flex-col justify-center pl-8">
      <div className="mb-7">
        <img src={img} />
      </div>
      <div>
        <p className="text-[#474747] text-lg mb-2">{title}</p>
        <p className="text-[#A3A3A3]">{vacancy}</p>
      </div>
    </div>
  );
};

export default JobCard;
