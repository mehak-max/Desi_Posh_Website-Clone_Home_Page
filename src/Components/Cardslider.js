import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { card4 } from '../Data/Data'
import Product2 from './Product2';
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    992: { items: 3 },
    1200: { items: 4 },  
};
const items = card4.map((x,i)=> <Product2 propsdata={x} key={i} />)
const Cardslider = () => {
  return (
    <div className='container mx-auto mt-2'>
    <div className="line-container">
  <div className="line left-line"></div>
  <span className="text">Our Collections</span>
  <div className="line right-line"></div>
</div>
      <AliceCarousel   
        items={items}
        responsive={responsive}
        autoPlay
        disableButtonsControls
        disableDotsControls
        infinite
        autoPlayInterval={2000}
    />
    
    </div>
  )
}
export default Cardslider
