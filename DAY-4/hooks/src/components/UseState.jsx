import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
//   const [bgColor, setBgColor] = useState("bg-gray-100"); // Tailwind class for background

  const addValue = () => {
    // setCount(count + 1);
    setCount(pev => pev + 1);
    setCount(pev => pev + 1);
    setCount(pev => pev + 1);
    setCount(pev => pev + 1);
    console.log("Count: " + count);
  };
  const subValue = () => {
    if (count > 0) setCount(count - 1);
    console.log("Count: " + count);
  };

//   const changeColor = () => {
//     setBgColor(bgColor === "bg-gray-100" ? "bg-red-200" : "bg-gray-100" );
//   };

  return (
    // <div className={`flex flex-col items-center justify-center min-h-screen ${bgColor}`}>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Counter App</h1>
      <h2 className="text-xl mb-6 text-gray-800">counter: {count}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={addValue}>
        Increase
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={subValue}
      >
        Decrease
      </button>
      {/* <button className="bg-green-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={changeColor}>Change Color</button> */}
    </div>
  );
}