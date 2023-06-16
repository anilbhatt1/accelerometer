import React, { useEffect, useState } from 'react';

const App = () => {
  
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleMotionEvent = (event) => {
      const { x, y, z } = event.accelerationIncludingGravity;
      setAcceleration({ x, y, z });
    };

    window.addEventListener('devicemotion', handleMotionEvent);

    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  }, []);

  const timestamp = Date.now();
  console.log(acceleration, timestamp);


  return (
    <div className="main-container">
      <h1>Accelerometer Data</h1>
      <p>X: {acceleration.x}</p>
      <p>Y: {acceleration.y}</p>
      <p>Z: {acceleration.z}</p>
    </div>
  );
};

export default App;
