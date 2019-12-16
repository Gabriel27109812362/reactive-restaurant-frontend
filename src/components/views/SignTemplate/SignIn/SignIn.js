import React, {Component} from 'react';
import SignTemplate from '../SignTemplate';
import Form from '../components/Form/Form';
import Control from '../components/Control/Control';
import Submit from '../components/Submit/Submit';

export default class SignIn extends Component {

  render() {
    return (
      <SignTemplate>
        <Form>
          <Control type="email" placeholder="Email"/>
          <Control type="password" placeholder="Password"/>
          <Submit label='Sign In'/>
        </Form>
      </SignTemplate>
    );
  }
}


