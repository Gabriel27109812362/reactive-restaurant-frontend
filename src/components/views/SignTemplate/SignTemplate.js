import React from 'react';
import {NavbarWithLogo} from '../../common/Navbar/Navbar';
import styles from './SignTemplate.module.scss';
import {Footer} from '../../common/Footer/Footer';

const SignTemplate = props => {
  return (
    <>
      <NavbarWithLogo/>
      <div className={styles.mainContainer}>
        <p className={styles.title}>Sign In</p>
        {props.children}
      </div>
      <Footer/>
    </>
  );
};

export default SignTemplate;
