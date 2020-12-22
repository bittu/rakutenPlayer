import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RakutenLogo from '../../assets/rakutenTv.png';

import './navBar.css'

const Navbar = () => {
  return (
    <div className="container">
    <div className="logo">
        <Link to='/'>
          <img src={RakutenLogo} width="187" height="42" alt="rakuten logo"/>
        </Link>
    </div>
    <div className="navbar">
    </div>
</div>
  )

}; export default Navbar;