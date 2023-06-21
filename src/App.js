/*
This code is for the following:
- Display x, y, z data at a fixed interval say 3 secs
*/

import React, { useEffect, useState } from 'react';
import { adddata } from './ApiService.js';

const App = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const isAndroid = /Android/.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isNone = !isAndroid && !isiOS;
  const isFunc = (typeof DeviceMotionEvent.requestPermission === 'function')
  const getCurrentTimestamp = () => {
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:.TZ]/g, '').replace(/[^\d*]/g, '');
    return timestamp;
  };  
  
    
  const handlePermissionRequest = () => {    
    if (isFunc) {
      DeviceMotionEvent.requestPermission()
        .then((response) => {
          if (response === 'granted') {
                window.addEventListener('devicemotion', handleMotionEvent);  
          }
        })
        .catch((error) => {
          console.error('Error requesting accelerometer permission:', error);
        });
    }
  };

  const handleStartRequest = () => {    
            window.addEventListener('devicemotion', handleMotionEvent);  
  };

  const handleMotionEvent = (event) => {
        const { x, y, z } = event.accelerationIncludingGravity;
        adddata(x, y, z)
            .then(res => {
                console.log("Current Timestamp: ", getCurrentTimestamp(), "Response: ", res)
            });
        setAcceleration({ x, y, z });
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  });  

  return (
    <div>
        <h1>Accelerometer Data</h1>
        <p>Current Timestamp: {getCurrentTimestamp()}</p>
        <p>X: {acceleration.x}</p>
        <p>Y: {acceleration.y}</p>
        <p>Z: {acceleration.z}</p>
        <p>isFunc : {typeof DeviceMotionEvent.requestPermission === 'function' ? "Yes" : "No"}</p>
        <p>isAndroid : {isAndroid ? "Yes" : "No"}</p>
        <p>isiOS : {isiOS ? "Yes" : "No"}</p>
        <p>isNone : {isNone ? "Yes" : "No"}</p>
       {isAndroid && <button onClick={handleStartRequest}>Android - Start</button>}              
       {isiOS && <button onClick={handlePermissionRequest}>iOS - Permission & Start</button>}
       {isNone && <button onClick={handleStartRequest}>Non Android & non iOS - Start</button>}
    </div>
  );
};

export default App;
