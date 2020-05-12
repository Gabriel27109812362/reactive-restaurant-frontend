import React, { useState } from 'react';
import SignTemplate from '../SignTemplate';
import Form from '../components/Form/Form';
import Control from '../components/Control/Control';
import Submit from '../components/Submit/Submit';

const SignIn = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = () => {

  };

  return (
    <SignTemplate>
      <Form>
        <Control type="email" placeholder="Email"/>
        <Control type="password" placeholder="Password"/>
        <Submit label='Sign In'/>
      </Form>
    </SignTemplate>
  );

};

export default SignIn;
