/*
- Displays x, y, z data in specified time limits (modification to App_V2.js)
- Works fine in Android and should work in iOS too 
*/

import React, { useState } from 'react';
import Add from './Add';
import Get from './Get';

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showGet, setShowGet] = useState(false);  

  const handleAddRequest = () => {
      setShowAdd(true);
      setShowGet(false);   
  };

  const handleGetRequest = () => {
      setShowAdd(false);
      setShowGet(true);    
};

  return (
    <div>
        <h1>Accelerometer Data </h1>
        <button onClick={handleAddRequest}>Accel - Add</button>     
        <button onClick={handleGetRequest}>Accel - Get</button> 
        {showAdd && <Add />}
        {showGet && <Get />}    
    </div>
  );
};

export default App;
