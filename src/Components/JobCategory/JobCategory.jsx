import React from 'react';
import JobCard from './JobCard/JobCard';

const JobCategory = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 md:px-8 mt-32'>
            <div className='text-center'>
                <h3 className='text-[#1A1919] text-4xl mb-4 font-extrabold'>Job Category List</h3>
                <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-8'>

                <JobCard img="https://i.ibb.co/pKDXBBW/accounts-1.png" title="Account & Finance" vacancy="300 Jobs Available"/>

                <JobCard img="https://i.ibb.co/0Y0vS42/business-1.png" title="Creative Design" vacancy="100+ Jobs Available"/>

                <JobCard img="https://i.ibb.co/sjGPHV7/social-media-1.png" title="Marketing & Sales" vacancy="150 Jobs Available"/>

                <JobCard img="https://i.ibb.co/S38Z1QV/chip-1.png" title="Engineering Job" vacancy="224 Jobs Available"/>
            </div>
        </div>
    );
};

export default JobCategory;