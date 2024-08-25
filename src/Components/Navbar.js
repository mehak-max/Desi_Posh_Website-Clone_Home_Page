import React from 'react'


const Navbar = () => {
  return (
    <div>
    <div>
     {/* 1st NavBar  */}
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " style={{marginTop: '-1px'}} id="navbarSupportedContent">
        <ul className="navbar-nav   mx-auto">
          <li className="nav-item ">
            <a className="nav-link active  " aria-current="page" href="#">Free UK DELIVERY WHEN YOU SPEND $70</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-success text-white" style={{borderRadius: 0, border: 0}} type="submit">-Close</button>
        </form>
      </div>
    </div>
  </nav>
   {/* Second NavBar  */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop: '-11px'}}>
    <div className="container-fluid " style={{marginTop: '-2px', marginBottom: '-9px'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="fa-solid fa-phone" style={{color: '#dddedf'}} />+44 1772451917</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"><i className="fa-regular fa-envelope" style={{color: '#dfe2e7'}} /> info@desiposh.com</a>
        </li>
      </ul>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent" >
        <ul className="navbar-nav " >
          <li className="nav-item  " >
            <a className="nav-link active " aria-current="page" style={{margin:'0px 130px'}} href="#">Free UK Delivery When You Spend $70  <span className="text-danger"> Shop Now</span></a>
          </li>
          <li className="nav-item dropdown " >
            <a className="nav-link dropdown-toggle " href="#" style={{margin:'0px 130px'}}   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-flag" /> PAK
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* 3rd Navbar  */}
  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid" style={{marginTop: '-12px'}}>
      <a className="navbar-brand" href="#">
        <img src="/dimage/logo.avif" alt="Avatar Logo" style={{width: 120, marginLeft: '20%'}} className="rounded-pill" /> 
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto  mb-lg-0" style={{marginLeft: '7%'}}>
          <li className="nav-item " style={{padding: '0px 10px'}}>
            <a className="nav-link active" aria-current="page" href="#">All</a>
          </li>
          <li className="nav-item" style={{padding: '0px 10px'}}>
            <a className="nav-link active" href="#">Party Collection</a>
          </li>
          <li className="nav-item" style={{padding: '0px 10px'}}>
            <a className="nav-link active" aria-current="page" href="#">Wedding Collection</a>
          </li>
          <li className="nav-item" style={{padding: '0px 10px'}}>
            <a className="nav-link active text-danger" href="#">SALE</a>
          </li>
          <li className="nav-item" style={{padding: '0px 10px'}}>
            <a className="nav-link active" aria-current="page" href="#">Spring/Summer</a>
          </li>
          <li className="nav-item" style={{padding: '0px 10px'}}>
            <a className="nav-link active" aria-current="page" href="#">Mummy &amp; Me</a>
          </li>
          <li className="nav-item" style={{padding: '0px 10px'}}>
            <a className="nav-link active" href="#">Kids</a>
          </li>
        </ul>
        <ul className="navbar-nav " style={{marginRight: 50}}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><i className="fa-solid fa-magnifying-glass" style={{color: '#7c8492'}} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#"><i className="fa-regular fa-user" style={{color: '#818da2'}} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><i className="fa-regular fa-heart" style={{color: '#738096'}} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#"><i className="fa-solid fa-cart-shopping" style={{color: '#858c99'}} /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    </div>
  )
}

export default Navbar
