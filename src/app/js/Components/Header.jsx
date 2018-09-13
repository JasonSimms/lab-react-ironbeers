import React from "react";
import { Link, Route } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header row">
      <h4>ReactBeers

      <Link to="/beers">Beers</Link>
      <Link to="/random-beer">Random-Beer</Link>
      <Link to="/new-beer">New-Beer</Link>
      </h4>
    </div>
  );
};

export default Header;
