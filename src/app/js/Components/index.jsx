import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import axios from "axios";


import Beers from './Beers'
import New from './New'
import Random from './Random'


import Header from './Header'
// import List from './List'
// import Details from './Details'

class BeersIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
          users: [],
          allBeers: []
        }
      }
      componentDidMount() {
        // Get all the beers
        axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(result => {
          this.setState({allBeers :result.data})
        });
      }


    render() {
        console.log(`See the beers?`)
        return (
            <div className="container">
                <Header />
                <div className="content">
                <Beers allBeers={this.state.allBeers}/>
                <Random />
                <New />
                </div>
            </div>
        )
    }
}

export default BeersIndex