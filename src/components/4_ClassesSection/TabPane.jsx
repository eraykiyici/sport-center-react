import React from 'react';

const TabPane = ({ title, img, children }) => {
  return (
    <div className="row align-items-center">
      <div className="tab-content-div col-md-6 mb-4 mb-md-0">
        <h3 className="fw-bold mb-3 fs-2">{title}</h3>
        <p className="fw-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus
          voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia
          autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.
        </p>
        {children}
      </div>
      <div className="col-md-6 text-center">
        <img src={`img/${img}`} alt={title} className="img-fluid rounded" />
      </div>
    </div>
  );
};

export default TabPane;