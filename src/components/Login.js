import React, {Component} from 'react';
import '../styles/App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Login extends Component {
  render() {
    return(
      <div className='container'>
        <h1> Login </h1>
        <Form inline>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>{' '}
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword">Password</Label>{' '}
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}
