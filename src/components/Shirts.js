import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';
import { Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Container, Col, Row, Button } from 'reactstrap';

export default class Shirts extends Component {
  render(){
    return(
      <div>
        <Container>
          <Row>
          <Col md='6' lg='4'>
              <Link to="/shop-shirts">
              <Card style={{margin:'15px', padding:'10px'}}>
                <img src="shirts.jpg" width="100%"  alt="image" />
                <CardBlock>
                  <CardTitle>Shirts 1</CardTitle>
                  <CardSubtitle>$25.00</CardSubtitle>
                </CardBlock>
              </Card>
            </Link>
          </Col>
          <Col md='6' lg='4'>
              <Link to="/shirts">
              <Card style={{margin:'15px', padding:'10px'}}>
                <img src="shirts.jpg" width="100%"  alt="image" />
                <CardBlock>
                  <CardTitle>Shirts 1</CardTitle>
                  <CardSubtitle>$25.00</CardSubtitle>
                </CardBlock>
              </Card>
            </Link>
          </Col>
          <Col md='6' lg='4'>
              <Link to="/shirts">
              <Card style={{margin:'15px', padding:'10px'}}>
                <img src="shirts.jpg" width="100%"  alt="image" />
                <CardBlock>
                  <CardTitle>Shirts 1</CardTitle>
                  <CardSubtitle>$25.00</CardSubtitle>
                </CardBlock>
              </Card>
            </Link>
          </Col>
            <Col md='6' lg='4'>
                <Link to="/shirts">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src="shirts.jpg" width="100%"  alt="image" />
                  <CardBlock>
                    <CardTitle>Shirts 1</CardTitle>
                    <CardSubtitle>$25.00</CardSubtitle>
                  </CardBlock>
                </Card>
              </Link>
            </Col>
          </Row>
      </Container>
      </div>
    )
  }
}
