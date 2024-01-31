
import React from "react";
import './../styles/App.css';
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" value={name} onChange={handleNameChange} />
      {name && (
        <div>
          <p>Hello {name}!</p>
        </div>
      )}
    </div>
  )
}

export default App
