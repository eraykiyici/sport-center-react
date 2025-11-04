import React from 'react';
import SectionHeader from '../common/SectionHeader';
import TrainerCard from './TrainerCard';

const TrainersSection = () => {
  const subtitle = (
    <>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
      cumque saepe molestias, corrupti. <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </>
  );

  return (
    <div className="trainers" id="trainers">
      <div className="container p-5 mt-4">
        
        <SectionHeader 
          title="OUR BEST TRAINERS" 
          subtitle={subtitle} 
          subtitleClass="trainers-p" 
        />

        <div className="row text-center">
          <TrainerCard imgSrc="trainer1.jpg" name="Jane Doe" title="Yoga Trainer" />
          <TrainerCard imgSrc="trainer2.jpg" name="John Smith" title="Cardio Trainer" />
          <TrainerCard imgSrc="trainer3.jpg" name="Emily Brown" title="Pilates Trainer" />
        </div>
      </div>
    </div>
  );
};

export default TrainersSection;