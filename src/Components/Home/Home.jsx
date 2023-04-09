import React from 'react';
import Hero from '../Hero/Hero';
import JobCategory from '../JobCategory/JobCategory';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <>
            <Hero/>
            <JobCategory/>
            <Featured/>
        </>
    );
};

export default Home;