import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ReviewCard from './ReviewCard';

const ReviewSection = () => {
  const subtitle = (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
      facere maiores consequuntur iusto, <br /> Lorem ipsum dolor
    </>
  );
  
  const reviewText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque quam vitae sapien. Lorem ipsum dolor sit amet, consectetur adipiscing.";

  return (
    <div className="review-client" id="review">
      <div className="container p-5">
        <SectionHeader title="REVIEW CLIENT" subtitle={subtitle} subtitleClass="" />

        <div className="row">
          <ReviewCard 
            imgSrc="client1.jpg" 
            name="Diet Expert" 
            title="CFO" 
            text={reviewText} 
          />
          <ReviewCard 
            imgSrc="client2.jpg" 
            name="Cardio Trainer" 
            title="CEO" 
            text={reviewText} 
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;