import React from 'react';

const CounterItem = ({ number, text }) => {
  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="counter-item p-4">
        <h2 className="counter-number fw-bold mb-2 fs-3">{number}</h2>
        <p className="counter-text fw-bold fs-4 mb-0">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CounterItem;