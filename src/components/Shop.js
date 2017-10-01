import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';
import { Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Container, Col, Row, Button } from 'reactstrap';

export default class Shop extends Component {
  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col md='6' lg='4'>
                <Link to="/badge">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src="igp2.png" width="100%"  alt="image" />
                  <CardBlock>
                    <CardTitle>Badge 1</CardTitle>
                    <CardSubtitle>Badge 1 Price</CardSubtitle>
                  </CardBlock>
                </Card>
              </Link>
            </Col>
            <Col md='6' lg='4'>
                <Link to="/badge">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src="igp2.png" width="100%"  alt="image" />
                  <CardBlock>
                    <CardTitle>Badge 1</CardTitle>
                    <CardSubtitle>Badge 1 Price</CardSubtitle>
                  </CardBlock>
                </Card>
              </Link>
            </Col>
            <Col md='6' lg='4'>
                <Link to="/badge">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src="igp2.png" width="100%"  alt="image" />
                  <CardBlock>
                    <CardTitle>Badge 1</CardTitle>
                    <CardSubtitle>Badge 1 Price</CardSubtitle>
                  </CardBlock>
                </Card>
              </Link>
            </Col>
            <Col md='6' lg='4'>
                <Link to="/badge">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src="igp2.png" width="100%"  alt="image" />
                  <CardBlock>
                    <CardTitle>Badge 1</CardTitle>
                    <CardSubtitle>Badge 1 Price</CardSubtitle>
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
