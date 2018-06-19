import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import Carousel from "./Carousel";

export default class Home extends Component {
  render(){
    return(
      <div id="container">
          <Carousel/>
      </div>
    )
  }
}
