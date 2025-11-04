import React from 'react';
import TabPane from './TabPane';

const ClassTabContent = ({ activeTab }) => {
  return (
    <div className="tab-content">
      {activeTab === 'yoga' && (
        <TabPane title="Why are your Yoga?" img="yoga.jpg">
          <h4 className="fw-bold mb-3 fs-2">When comes Yoga Your Time.</h4>
          <p className="fw-bold">Saturday-Sunday: 8:00am - 10:00am</p>
          <p className="fw-bold">Monday-Tuesday: 10:00am - 12:00pm</p>
          <p className="fw-bold">Wednesday-Friday: 3:00pm - 6:00pm</p>
        </TabPane>
      )}

      {activeTab === 'group' && (
        <TabPane title="Why join Group Classes?" img="group.webp">
          <h4 className="font-bold text-2xl md:text-3xl mb-3">Group Class Schedule</h4>
          <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
          <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
          <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
        </TabPane>
      )}

      {activeTab === 'solo' && (
         <TabPane title="Why choose Solo Training?" img="solo.jpg">
            <h4 className="font-bold text-2xl md:text-3xl mb-3">Solo Training Times</h4>
            <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
            <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
            <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
         </TabPane>
      )}

      {activeTab === 'stretching' && (
         <TabPane title="Why do Stretching Exercises?" img="stret.webp">
            <h4 className="font-bold text-2xl md:text-3xl mb-3">Stretching Schedule</h4>
            <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
            <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
            <p className="font-bold">Saturday-Sunday: 8:00am - 10:00am</p>
         </TabPane>
      )}
    </div>
  );
};

export default ClassTabContent;