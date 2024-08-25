import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const data = [
   "/dimage/slider1.webp",
   "/dimage/slider2.webp",
   "/dimage/slider3.webp",
   "/dimage/slider4.webp"
];

const items = data.map((x, i) => (
    <img key={i} src={x} alt={`Slide ${i + 1}`} className='img-fluid' />  // Ensure 'img-fluid' class is applied if used
));

const Slider = () => {
  return (
    <div className='slider-container'>
      <AliceCarousel
        items={items}
        autoPlay
        infinite
        disableDotsControls
        disableButtonsControls
        autoPlayInterval={3000} // Adjusted to 3000ms for better user experience
      />
      <button className='explore-button'>Explore</button>
    </div>
  );
}

export default Slider;
