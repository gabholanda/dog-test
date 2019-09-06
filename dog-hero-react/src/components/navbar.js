import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return(
    <div className='navbar'>
<Link to='/owners'>Owners</Link>
<Link to='/caregivers'>Caregivers</Link>
<Link to='/dogs'>Dogs</Link>
<Link to='/signup-owner'>Signup as Owner</Link>
<Link to='/signup-caregiver'>Signup as Caregiver</Link>
    </div>
  )
}

export default Navbar