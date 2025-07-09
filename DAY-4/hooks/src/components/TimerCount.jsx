import React, { useEffect, useState } from "react";

function TimerCount() {
  let [time, setTime] = useState(0);

//   useEffect(() => {
//     let id = setInterval(() => {
//       console.log("Interval Running", time);
//       setTime(time+1);
//     }, 1000);

//   useEffect(() => {
//     let id = setInterval(() => {
//       console.log("Interval Running", time);
//       setTime(prev => prev+1);
//     }, 1000);

  useEffect(() => {
    let id = setInterval(() => {
    //   console.log("Interval Running", time);
      setTime(prev => {
        if(prev >= 10){
            console.log("prev value: ",prev);
            clearInterval(id);
            return prev;
        }
        return prev+1
      });
    }, 1000);

    return () => {
        console.log("cleaning running");
        clearInterval(id);
        
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col text-center text-2xl font-semibold text-amber-600 bg-amber-300 p-4 rounded-md w-60 mx-auto mt-10">
        Timer : {time}
      </div>
    </div>
  );
}

export default TimerCount;
