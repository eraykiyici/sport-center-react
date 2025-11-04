import React from 'react';

const BmiResultImage = ({ position }) => {
  return (
    <div className="w-full sm:w-auto sm:max-w-[45%] relative">
      <img src="img/bmi-index.jpg" alt="BMI-Index" className="w-full h-auto" />
      <div 
        id="bmi-indicator" 
        className="absolute"
        style={{ left: `${position}%` }}
      ></div>
    </div>
  );
};

export default BmiResultImage;