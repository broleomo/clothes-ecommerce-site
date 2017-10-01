import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button, FormGroup, Label, Input, Form, FormText } from 'reactstrap';

export default class Cart extends Component {
  render(){
    return(
      <div className='container'>

        <Container>
          <Row>
            <Col md='6' lg='6'>
            <Card>
              <Form style={{backgroundColor:'white', padding:'10px', marginTop:'10px', borderRadius:'0.3rem'}}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                <Link to="#"><Button style={{backgroundColor:'#F90093',color:'white',border:'none'}}>Continue</Button></Link>
              </Form>
            </Card>
            <Card>
              <Form style={{backgroundColor:'white', padding:'10px', marginTop:'10px', borderRadius:'0.3rem'}}>
                <FormGroup>
                <Label>Shipping Information</Label>
                  <Input type="text" name="name" id="name" placeholder="Name" />
                  <br/>
                  <Input type="text" name="address" id="address" placeholder="Address" />
                  <br/>
                  <Input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" />
                  <br/>
                  <Input type="text" name="city" id="city" placeholder="City" />
                  <br/>
                  <Input type="text" name="state" id="state" placeholder="State" />
                  <br/>
                  <Input type="text" name="phone" id="phone" placeholder="Phone Number" />
                </FormGroup>
                <Link to="#"><Button style={{backgroundColor:'#F90093',color:'white',border:'none'}}>Continue</Button></Link>
              </Form>
            </Card>
            </Col>




            <Col md='6' lg='6'>
          <div className='badge-container'>
            <Card>
              <CardBlock>
              <CardTitle>Order Summary</CardTitle>
                <img src='igp2.png' alt='badge' width="20%"/>
                  <CardSubtitle>Badge Name</CardSubtitle>
                  <FormGroup>
                    <Label for="exampleSelect">Quantity</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                  </FormGroup>
                    <p> Subtotal: $0.00</p>
                    <p> Tax: $0.00</p>
                    <p> Shipping: $0.00</p>
                    <p> Total: $0.00</p>
              </CardBlock>
            </Card>
        </div>
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}
