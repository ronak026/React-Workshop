import React, { useRef, useState } from 'react'

function Clock() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPaused(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setIsPaused(false);
  };

  return (
    <div>
      <div className="flex flex-col text-center text-2xl font-semibold text-amber-600 bg-amber-300 p-4 rounded-md w-60 mx-auto mt-10">
        Timer : {time}
      </div>
      <div className='mt-10'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 ml-6"
          onClick={startTimer}
          disabled={intervalRef.current !== null}
        >
          Start
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 ml-6"
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 ml-6"
          onClick={pauseTimer}
          disabled={intervalRef.current === null}
        >
          Pause
        </button>
      </div>
    </div>
  )
}

export default Clock