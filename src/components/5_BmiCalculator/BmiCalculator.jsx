import React, { useState, useEffect } from 'react';
import BmiInfo from './BmiInfo';
import BmiInputs from './BmiInputs';
import BmiResultImage from './BmiResultImage';

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  useEffect(() => {
    const h = height / 100;
    const w = weight;

    if (h > 0 && w > 0) {
      const bmi = (w / (h * h)).toFixed(1);

      let positionPercent = 0;
      if (bmi < 18.5) positionPercent = 10;
      else if (bmi < 25) positionPercent = 30;
      else if (bmi < 30) positionPercent = 50;
      else if (bmi < 35) positionPercent = 70;
      else positionPercent = 90;

      setIndicatorPosition(positionPercent);
    } else {
      setIndicatorPosition(0); 
    }
  }, [height, weight]); 

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        
        <div className="w-full sm:w-auto sm:max-w-[50%]">
          <BmiInfo />
          <BmiInputs 
            height={height} 
            setHeight={setHeight} 
            weight={weight} 
            setWeight={setWeight} 
          />
        </div>

        <BmiResultImage position={indicatorPosition} />

      </div>
    </div>
  );
};

export default BmiCalculator;