import React from 'react'
import Carousel from "react-slick";
import EventCard from './EventCard';

const CarouselBlock = ({styles, CustomCard}) => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return <button className={className} onClick={onClick} />;
      }
    
      function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
      }
  return (
    <div className="carouselWrapper">
    <Carousel
      // dots={true}
      infinite={true}
      speed={500}
      slidesToShow={2}
      slidesToScroll={1}
      className={"center"}
      display="true"
      centerMode={true}
      centerPadding={"0px"}
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
    >
      <CustomCard styles={styles} />

      <CustomCard styles={styles} />
      <CustomCard styles={styles} />
      <CustomCard styles={styles} />
      <CustomCard styles={styles} />
    </Carousel>
  </div>
  )
}

export default CarouselBlock