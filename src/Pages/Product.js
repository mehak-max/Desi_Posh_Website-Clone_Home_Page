import React from 'react'
import { products } from '../Data/Data'


const Product = () => {
  return (
    <div className='container'>
      <h3 className='text-center p-4' style={{fontFamily:'monospace',fontSize:'50px',color:'#1F3E6A'}}>Product Page</h3>

      <div className='row'>
        {
            products.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
                        <div className='card'>
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid' />
                            <div className='card-body p-3 m-2'>
                                <h5 className='card-title '>{item.title}</h5>
                                <p className='card-text '>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>

  )
}

export default Product
