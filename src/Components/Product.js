import React from 'react'
const Product = (props) => {
    const {propsdata} = props;
    const {price, description,image}=propsdata
  return (
    <div className=' mx-3 my-4 text-center'>
<div className="cardn" style={{border:'none',  borderRadius:'0px'}}>
  <img src={image} className="card-img-top zoom-effect " style={{width:"100%", height:'70%'}} alt="..." />
  <div className="hover-buttons">
                   <button className="btn btn-light " style={{borderRadius:'50px', padding:'10px 20px' }}>Quick view</button>  
                    <button className="btn btn-light" style={{borderRadius:'50px', padding:'10px 20px'  }}>Quick shop</button> 
                </div>
  <div className="card-body">
    <p className="card-text " style={{fontWeight:'bold'}}> {description.slice(0,45)}... </p>
    <span className="text-dark"> {price}</span>
  </div>
</div>
    </div>
  )
}
export default Product
