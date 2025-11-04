import React from 'react';

const PurchaseCard = ({ imgSrc, title, oldPrice, newPrice }) => {
  return (
    <div className="card col-md-3" style={{ width: "18rem" }}>
      <img src={`img/${imgSrc}`} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h3 className="card-text text-center">{title}</h3>
        <div className="text-center mb-0 mt-auto">
          <p className="mb-0">
            <span className="text-decoration-line-through">{oldPrice}</span> / {newPrice}$
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <i className="fa-solid fa-cart-shopping"></i>
          <p className="mb-0">Add to Card</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;