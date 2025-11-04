import React from 'react';
import CounterItem from './CounterItem';

const CounterNumber = ({ number }) => <h2 className="counter-number fw-bold mb-2 fs-3">{number}</h2>;
const CounterText = ({ text }) => <p className="counter-text fw-bold fs-4 mb-0">{text}</p>;


const CounterSection = () => {
  return (
    <section className="counter-section py-5">
      <div className="container">
        <div className="row text-center">
          
          <div className="col-12 col-md-3 mb-4">
            <div className="counter-item p-4">
              <CounterNumber number="325" />
              <CounterText text="Course" />
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="counter-item p-4">
              <CounterNumber number="405" />
              <CounterText text="Work Out" />
            </div>
          </div>
          
          <CounterItem number="305" text="Working Hour" />
          <CounterItem number="705" text="Happy Client" />

        </div>
      </div>
    </section>
  );
};

export default CounterSection;