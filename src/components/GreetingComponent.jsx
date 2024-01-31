import React, { useState } from 'react';

const GreetingComponent = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
    <p>Enter your name:</p>
        <input type="text" value={name} onChange={handleNameChange} />
      {name && (
        <div>
          <p>Hello {name}!</p>
        </div>
      )}
    </div>
  );
};

export default GreetingComponent;