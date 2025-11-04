import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ClassTabs from './ClassTabs';
import ClassTabContent from './ClassTabContent';

const ClassesSection = () => {
  const [activeTab, setActiveTab] = useState('yoga'); 
  const subtitle = "Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.";

  return (
    <section className="classes-section py-5">
      <div className="container" id="classes">
        <SectionHeader title="OUR CLASSES" subtitle={subtitle} />
        
        <ClassTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <ClassTabContent activeTab={activeTab} />
      </div>
    </section>
  );
};

export default ClassesSection;