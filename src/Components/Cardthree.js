import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { card3 } from '../Data/Data'
import Product from './Product';
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    992: { items: 3 },
    1200: { items: 4 },
   
};
const items = card3.map((x,i)=> <Product propsdata={x} key={i} />)
const Cardthree = () => {
  return (
    <div className='container mx-auto mt-2'>
      <AliceCarousel   
        items={items}
        responsive={responsive}
        autoPlay
        disableButtonsControls
        disableDotsControls
        infinite
        autoPlayInterval={2000}
    />
    <div className='container text-center p-3'>
         <button className='btn btn-secondary px-5 py-2' style={{borderRadius:'50px', backgroundColor:'black'}}>Load More</button>
    </div>
    </div>
  )
}
export default Cardthree
