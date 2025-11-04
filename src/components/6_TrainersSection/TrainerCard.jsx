import React from 'react';

const TrainerCard = ({ imgSrc, name, title }) => {
  return (
    <div className="col-md-4">
      <div className="trainer-card">
        <img src={`img/${imgSrc}`} alt={name} />
        <div className="info">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;