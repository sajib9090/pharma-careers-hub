import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 md:px-8 mt-24'>
           <div>
             <h2 className='text-3xl mb-4'>Q: When should we use context API?</h2>
             <p>Ans: If we need passing data deeply. Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
           </div>
           <div className='mt-12'>
             <h2 className='text-3xl mb-4'>Q: What is the custom Hook?</h2>
             <p>Ans: Custom React js hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React Application.</p>
           </div>
           <div className='mt-12'>
             <h2 className='text-3xl mb-4'>Q: What is UseRef and what's the purpose of useRef?</h2>
             <p>Ans: useRef is a hook in React.</p>
           </div>
           <div className='mt-12'>
             <h2 className='text-3xl mb-4'>Q: What is useMemo?</h2>
             <p>Ans: useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
           </div>
        </div>
    );
};

export default Blog;