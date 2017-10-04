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
          <h1> Cool Clothes, Inc. </h1>
          <p> Check out how cool we are. This could be you. </p>
          <Button style={{backgroundColor:'#45CCBC',width:'45%',border:'none'}}><Link to='/shop-shirts' style={{color: 'white'}}> Shop Fall Shirts!</Link></Button>
          </div>
        </div>



      </div>
    )
  }
}
