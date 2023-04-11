import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    fetch(`./AssignmentMarks/AssignmentMarks.json`)
      .then((res) => res.json())
      .then((data) => setMarks(data));
  }, []);


  return (
    <div className="max-w-7xl mx-auto mt-28 mb-12">
        <h1 className="text-center text-3xl font-bold py-8">Assignment Marks</h1>
      <ResponsiveContainer width="100%" height={400}>
                <ComposedChart 
                 data={marks}
                >
               <XAxis dataKey="assignment" scale="band" />
               <YAxis dataKey="mark"/>
               <Bar dataKey="obtain-mark" barSize={40} fill="#413ea0" />
               <Tooltip />
               <Legend />
               <Area type="monotone" dataKey="obtain-mark" fill="#8884d8" stroke="#8884d8" />
               
                </ComposedChart>
            </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
