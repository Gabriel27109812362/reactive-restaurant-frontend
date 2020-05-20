import React, { useState, useEffect } from 'react';
import SignTemplate from '../SignTemplate';
import Form from '../components/Form/Form';
import Control from '../components/Control/Control';
import Submit from '../components/Submit/Submit';
import Validator from '../components/Validator/Validator';
import { registerUser } from 'actions/user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { mainRoutes } from '../../../../routes';

const SignUp = (props) => {

  const { registerUser, history } = props;

  const [ userData, setUserData ] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const [ confirmationValidator, setConfirmationValidator ] = useState(false);
  const [ existedUserValidator, setExistedUserValidator ] = useState(false);
  const [ isEmptyValidators, setIsEmptyValidators ] = useState({
    name: false,
    surname: false,
    email: false,
    password: false,
    confirmedPassword: false,
  });

  const onSubmit = async(e) => {
    e.preventDefault();
    const { name, surname, confirmedPassword, password, email } = userData;

    if(password !== confirmedPassword) {
      setConfirmationValidator(true);
      return;
    }

    await registerUser({ name, surname, email, password });

    setUserData({
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmedPassword: '',
    });

    history.push(mainRoutes.signIn);

  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    switch(name) {
      case 'confirmedPassword':
        setConfirmationValidator(false);
        break;
      case 'email':
        setExistedUserValidator(false);
        break;
      default:
        break;
    }

    if(!value.length) {
      setIsEmptyValidators({ ...isEmptyValidators, [name]: true });
    } else {
      setIsEmptyValidators({ ...isEmptyValidators, [name]: false });
    }

    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignTemplate>
      <Form handleSubmit={onSubmit}>

        <Control value={userData.name} name='name' onChange={handleInputChange}
                 type="text" placeholder="Name"/>
        {isEmptyValidators.name && <Validator message="Name is empty"/>}

        <Control value={userData.surname} name='surname'
                 onChange={handleInputChange}
                 type="text" placeholder="Surname"/>
        {isEmptyValidators.surname && <Validator message="Surname is empty"/>}

        <Control value={userData.email} name='email'
                 onChange={handleInputChange}
                 type="email" placeholder="Email"/>
        {isEmptyValidators.email && <Validator message="Email is empty"/>}
        {existedUserValidator && <Validator message="User has already exists"/>}

        <Control value={userData.password} name='password'
                 onChange={handleInputChange}
                 type="password"
                 placeholder="Password"/>
        {isEmptyValidators.password && <Validator message="Password is empty"/>}

        <Control value={userData.confirmedPassword} name='confirmedPassword'
                 onChange={handleInputChange}
                 type="password"
                 placeholder="Confirm password"/>
        {isEmptyValidators.confirmedPassword &&
         <Validator message="Confirmed is empty"/>}
        {confirmationValidator &&
         <Validator message="Password is not the same"/>}

        <Submit label='Sign Up'/>
      </Form>
    </SignTemplate>
  );

};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
