
import React from 'react';
import { Link } from 'react-router-dom';
// import 'fontawesome-free/css/all.min.css';
import '../styles/navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = ({ size }) => {
  return (
    <nav>
      <div className='nav-box' style={{listStyle:'none'}}>
        <Link to="/" style={{listStyle:'none', color:'white'}}>
          <strong style={{listStyle:'none',color:'white', cursor: "pointer" ,fontSize:'35px', padding:'10px'}}>Book Shop</strong></Link>
          
      </div>
      <div className='cart'>
        <span className='cart-1'>
        <Link to="/cart">
          <i className='fas fa-cart-plus' style={{listStyle:'none',color:'white', cursor: "pointer",marginTop:'15px'}}></i>
          </Link>
        </span>
        <span style={{ marginRight:'30px'}}>{size}</span>
      </div>
    </nav>
  );
};

export default Navbar;






