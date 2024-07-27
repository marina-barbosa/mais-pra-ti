import { useState, useEffect } from 'react';

function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };
    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="p-4 text-center">
      <h1 className="font-bold">Relógio em Tempo Real</h1>
      <p className="text-xl">{formatTime(currentTime)}</p>
    </div>
  );
}
export default RealTimeClock;
