import React, { useEffect } from 'react';
import '../styles/capsule.css';

const CapsuleSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const capsules = document.querySelectorAll('.capsule');
      capsules.forEach((capsule, index) => {
        const scrollY = window.scrollY + 500;
        const translateY = (scrollY / 20) * (9 - index); // Adjusted for descending order
        capsule.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="capsule-container">
              {/* <div className='capsuleSection'>
        <div className="capsule"></div>
        <div className="capsule"></div>
        <div className="capsule"></div>
        <div className="capsule"></div>
        <div className="capsule"></div>
        <div className="capsule"></div>
        <div className="capsule"></div>
        <div className="capsule"></div>
        <div className="capsule"></div>
        </div> */}
      <div className="capsuleSection">
        {/* Render 10 capsules */}
        {[...Array(9)].map((_, index) => (
          <div className="capsule" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default CapsuleSection;
