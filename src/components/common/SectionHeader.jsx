import React from 'react';

// Birden fazla bölümde kullanılan "Başlık + Çizgi + Alt Metin" yapısı
const SectionHeader = ({ title, subtitle, subtitleClass = "w-75" }) => {
  return (
    <div className="text-center mb-5">
      <h2 className="section-title fw-bold">{title}</h2>
      <div className="title-line mx-auto mb-3"></div>
      <p className={`section-p ${subtitleClass} mx-auto fw-bold`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;