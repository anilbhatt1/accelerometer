import React, { useEffect, useState } from 'react';

const App = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const isAndroid = /Android/.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  console.log('isAndroid', isAndroid)
  console.log('isiOS', isiOS)

  useEffect(() => {
    const handleMotionEvent = (event) => {
      const { x, y, z } = event.accelerationIncludingGravity;
      setAcceleration({ x, y, z });
    };

    if (isiOS) {
      // Running on iOS, ask for accelerometer permission
        DeviceMotionEvent.requestPermission()
          .then((response) => {
            if (response === 'granted') {
              window.addEventListener('devicemotion', handleMotionEvent);
            }
          })
          .catch((error) => {
            console.error('Error requesting accelerometer permission:', error);
          });
    } else {
      // Running on Android or non IOS, directly add event listener
      window.addEventListener('devicemotion', handleMotionEvent);
    }

    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  }, []);

  return (
    <div>
      <h1>Android: {isAndroid ? 'Yes' : 'No'}</h1>
      <h1>ios: {isiOS ? 'Yes' : 'No'}</h1>
      <h1>Accelerometer Data</h1>
      <p>X : {acceleration.x}</p>
      <p>Y : {acceleration.y}</p>
      <p>Z : {acceleration.z}</p>
    </div>
  );
};

export default App;
