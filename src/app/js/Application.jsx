import React from "react";
import axios from "axios";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import BeersIndex from "./Components";


class Application extends React.Component {
    

  render() {
    //   console.log(`hihi`, this.state.allBeers.length)
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/beers" component={BeersIndex}/>
              <Route path="/random-beer" component={BeersIndex}/>
              <Route path="/new-beer" component={BeersIndex}/>
              <Route
                render={() => {
                  return (
                    <div>
                      <Link to="/beers">Beers</Link>
                      <br />
                      <Link to="/random-beer">Random-Beer</Link>
                      <br />
                      <Link to="/new-beer">New-Beer</Link>
                    </div>
                  );
                }}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Application;
