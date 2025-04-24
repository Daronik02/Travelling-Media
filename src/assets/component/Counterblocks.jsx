import React, { useEffect, useState } from "react";

const CounterBlock = ({ title, end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration * 1000) / end;
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);
    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <div className="bg-white shadow-xl rounded-xl px-8 py-6 text-center w-64">
      <div className="text-lg text-gray-700 font-medium">{title}</div>
      <div className="text-4xl font-extrabold text-blue-700 mt-1">{count}</div>
    </div>
  );
};

const Counterblocks = () => {
  const counters = [
    { title: "Happy Clients", end: 777 },
    { title: "Projects Completed", end: 444 },
    { title: "Awards Won", end: 111 },
  ];

  return (
    <div className="min-m-screen bg-[#f5f5dc] py-20 px-6 flex justify-center items-center">
      <div className="flex flex-row flex-wrap gap-12 justify-center">
        {counters.map((item, idx) => (
          <CounterBlock key={idx} title={item.title} end={item.end} />
        ))}
      </div>
    </div>
  );
};

export default Counterblocks;
