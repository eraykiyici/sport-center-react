import React from 'react';

const ClassTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["yoga", "group", "solo", "stretching"];
  
  return (
    <ul className="nav justify-content-center mb-4 flex flex-col sm:flex-row " id="classTabs" role="tablist">
      {tabs.map((tab, index) => (
        <li key={tab} className="nav-item me-5 mx-5 col-2" role="presentation">
          <button 
            className={`nav-link tab-button ${activeTab === tab ? "active" : ""}`} 
            id={`${tab}-tab`}
            type="button" 
            role="tab"
            onClick={() => setActiveTab(tab)} 
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} 
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ClassTabs;