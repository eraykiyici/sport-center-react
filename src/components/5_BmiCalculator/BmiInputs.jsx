import React from 'react';

const BmiInputs = ({ height, setHeight, weight, setWeight }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-2">
      <div className="flex items-center gap-2 w-full">
        <input 
          type="number" 
          id="heightInput" 
          className="calculator-input px-2 py-1 w-full sm:w-auto" 
          placeholder="Your Height" 
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <span>cm</span>
      </div>
      <div className="flex items-center gap-2 w-full">
        <input 
          type="number" 
          id="weightInput" 
          className="calculator-input px-2 py-1 w-full sm:w-auto" 
          placeholder="Your Weight" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <span>kg</span>
      </div>
    </div>
  );
};

export default BmiInputs;