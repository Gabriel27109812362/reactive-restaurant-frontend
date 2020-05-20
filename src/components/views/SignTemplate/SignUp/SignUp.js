import React, {Component} from 'react';
import SignTemplate from '../SignTemplate';
import Form from '../components/Form/Form';
import Control from '../components/Control/Control';
import Submit from '../components/Submit/Submit';

export default class SignUp extends Component {

  render() {

    return (
      <SignTemplate>
        <Form>
          <Control type="text" placeholder="Name"/>
          <Control type="text" placeholder="Surname"/>
          <Control type="email" placeholder="Email"/>
          <Control type="password" placeholder="Password"/>
          <Control type="password" placeholder="Confirm password"/>
          <Submit label='Sign Up'/>
        </Form>

      </SignTemplate>

    );
  }
}




