import React from 'react'
const Product2 = (props) => {
    const {propsdata} = props;
    const {image,buttonLabel, buttonAction}=propsdata
  return (
    <div className=' mx-3 my-4 text-center'>
<div className="cardm" style={{border:'none',  borderRadius:'0px'}}>
  <img src={image} className="card-img-top  zoom-effect" style={{width:"100%", height:'70%'}} alt="..." />
  {buttonLabel && (
                    <button
                        className="btn btn-light"
                        style={{
                            position: 'absolute',
                            bottom: '15px', // Adjust as needed
                            left: '50%',
                            transform: 'translateX(-50%)',
                            border: 'none',
                            borderRadius:'none',
                            backgroundColor:'white'
                        }}
                        onClick={buttonAction} // Add button action if needed
                    >
                        {buttonLabel}
                    </button>
  )}
</div>
    </div>
  )
}

export default Product2
