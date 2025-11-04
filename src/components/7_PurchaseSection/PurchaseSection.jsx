import React from 'react';
import SectionHeader from '../common/SectionHeader';
import PurchaseCard from './PurchaseCard';

const PurchaseSection = () => {
  const subtitle = (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
      dolore cupiditate fugiat, <br /> Lorem ipsum dolor
    </>
  );

  return (
    <div>
      <div className="container p-5">
        <SectionHeader 
          title="PURCHASE FROM US" 
          subtitle={subtitle} 
          subtitleClass="purchase-text" 
        />

        <div className="purchase-card row mt-4 gap-4 justify-content-center">
          <PurchaseCard 
            imgSrc="purchase1.jpg" 
            title="KETBELL / 5kg" 
            oldPrice="89,99" 
            newPrice="59,99" 
          />
          <PurchaseCard 
            imgSrc="purchase2.jpg" 
            title="Treadmill" 
            oldPrice="899,99" 
            newPrice="599,99" 
          />
          <PurchaseCard 
            imgSrc="purchase3.jpg" 
            title="Adjustable Dumbell" 
            oldPrice="89,99" 
            newPrice="59,99" 
          />
          <PurchaseCard 
            imgSrc="purchase4.jpg" 
            title="KETBELL / 3kg" 
            oldPrice="89,99" 
            newPrice="59,99" 
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;