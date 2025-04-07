import React, { useEffect, useState } from "react";

const CounterBlock = ({ title, end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={` items-center justify-center bg-white rounded-2xl shadow-lg p-8 text-center transition-opacity duration-700 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-gray-700 mt-3 text-xl font-medium">{title}</div>
      <div className="text-5xl font-extrabold text-blue-600">{count}</div>
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
    <div className="min-h-screen flexbox items-center justify-center bg-beige px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {counters.map((item, index) => (
          <CounterBlock key={index} title={item.title} end={item.end} />
        ))}
      </div>
    </div>
  );
};

export default Counterblocks;
