import "./banner.css";
import { Carousel } from "react-bootstrap";

import Banner1 from '../../images/banners/banner1.png';
import Banner2 from '../../images/banners/banner2.png';
import Banner3 from '../../images/banners/banner3.png';
import { useEffect, useState } from "react";


const Banner = () => {

  const [loading, setLoading] = useState(false); // Set initial loading state to false

  // Skeleton component for loading state
  const Skeleton = () => (
    <div className="banner-skeleton">
      <div className="banner-skeleton-image"></div>
    </div>
  );


  return (
    <>
      {loading ? (
        <Skeleton /> // Render skeleton if loading (optional)
      ) : (
        <Carousel className="banner-container">
          <Carousel.Item interval={5000}>
            <div className="banner-image" >
              <img src={Banner1} alt="Banner 1" />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="banner-image" >
              <img src={Banner2} alt="Banner 2" />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="banner-image" >
              <img src={Banner3} alt="Banner 3" />
            </div>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};

export default Banner;
