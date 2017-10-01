import React, {Component} from 'react';
import '../styles/App.css';
import {Button} from 'reactstrap';

import {Link} from 'react-router-dom';

export default class Home extends Component {
  render(){
    return(
      <div className='container'>
        <div className='home-header'>
          <div className='header-text'>
          <h1> Badge it up! </h1>
          <p> Cronut migas kickstarter venmo hashtag portland normcore street art vinyl lomo direct trade. </p>
          <Button style={{backgroundColor:'#F90093',width:'20%',border:'none'}}><Link to='/shop' style={{color: 'white'}}> Shop Now!</Link></Button>
          </div>
        </div>



      </div>
    )
  }
}
