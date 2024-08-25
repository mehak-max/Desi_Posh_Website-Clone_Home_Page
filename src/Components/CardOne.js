import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { card1 } from '../Data/Data'
import Product from './Product';
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    992: { items: 3 },
    1200: { items: 4 },
   
};

const items = card1.map((x,i)=> <Product propsdata={x} key={i} />)
const Cardone = () => {
  return (
    <div className='container mx-auto mt-2'>
    <div className="line-container">
  <div className="line left-line"></div>
  <span className="text">Arrivals</span>
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
export default Cardone
