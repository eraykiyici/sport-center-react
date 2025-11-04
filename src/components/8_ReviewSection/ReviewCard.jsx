import React from 'react';

const ReviewCard = ({ imgSrc, name, title, text }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="d-flex align-items-center mb-3">
        <img className="review-img" src={`img/${imgSrc}`} alt={name} />
        <div className="review-info ms-3">
          <h5 className="client-name mb-0">{name}</h5>
          <p className="client-title mb-0">{title}</p>
        </div>
      </div>
      <div className="kurdele p-4">
        <p className="mb-0">{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;