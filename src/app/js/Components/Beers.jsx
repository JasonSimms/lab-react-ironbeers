import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

// import Header from './Header'
// import List from './List'
// import Details from './Details'
const Beers = props => {
  const mappedBeers = props.allBeers.map(el => 
    <div className="card">
    <img src={el.image_url} alt="beerPic"/>
  <h6>{el.name}</h6>
  <p>{el.description}</p>
    </div>
  
  
  
  );

  return (
    <div className="cardBox">
      {mappedBeers}
    </div>
  );
};

export default withRouter(Beers);
