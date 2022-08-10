import React from 'react'
import './Banner.scss';
import banners from '../images/images.png'
const Banner = () => {
  return (
    <div className="banner">
      <img src={banners} alt="website banner " />
    </div>
  );
}

export default Banner