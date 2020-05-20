import React, { useState } from 'react';
import SignTemplate from '../SignTemplate';
import Form from '../components/Form/Form';
import Control from '../components/Control/Control';
import Submit from '../components/Submit/Submit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { authUser } from 'actions/user';
import { mainRoutes } from '../../../../routes';
import Validator from '../components/Validator/Validator';

const SignIn = (props) => {

  const { authUser, history } = props;
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ unauthorized, setUnauthorized ] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUnauthorized(false);
    switch(name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    const token = await authUser({ email, password });
    if(!token) {
      setUnauthorized(true);
    } else {
      setEmail('');
      setPassword('');
      history.push(mainRoutes.menu);
    }
  };

  return (
    <SignTemplate>
      <Form handleSubmit={onSubmit}>
        <Control type="email" value={email} placeholder="Email" name='email'
                 onChange={handleChange}/>
        <Control type="password" value={password} placeholder="Password"
                 name='password' onChange={handleChange}/>
        {unauthorized && <Validator message="User not found"/>}
        <Submit label='Sign In'/>
      </Form>
    </SignTemplate>
  );

};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
