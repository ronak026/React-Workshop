import React, { useMemo, useState } from 'react';

function UseMemo() {
  const [countInc, setCountInc] = useState(0);
  const [countDec, setCountDec] = useState(100);
  const [text, setText] = useState('');

  const doubleCount = useMemo(()=>{
    console.log("change happening");
    let i = 0;
    while(i <2000000000)i++;
    return countInc *2
  },[countInc])


  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold text-blue-700"> useMemo</h1>

      <p className="text-lg mt-4 text-gray-800">
         Double of Increment Count: <strong>{doubleCount}</strong>
      </p>
      <p className="text-lg mt-4 text-gray-800">
        Decrement Count: <strong>{countDec}</strong>
      </p>
      <div className="mt-4 space-x-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={()=> setCountInc(countInc+1)}
        >
           Increment

        </button>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={()=>setCountDec(countDec-1)}
        >
           Decrement
           
        </button>
      </div>

      <input
        className="border p-2 mt-6 rounded w-64"
        placeholder="Type something"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
    </div>
  );
}

export default UseMemo;