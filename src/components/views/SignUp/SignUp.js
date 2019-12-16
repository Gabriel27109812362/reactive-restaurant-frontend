import React, {Component} from 'react';
import styles from './SignUp.module.scss';
import {NavbarWithLogo} from '../../common/Navbar/Navbar';
import {Footer} from '../../common/Footer/Footer';

export default class SignUp extends Component {

  render() {

    return (
      <>
        <NavbarWithLogo/>
        <div className={styles.mainContainer}>
          <p className={styles.title}>Sign Up</p>
          <form className={styles.signUp}>
            <input className={styles.control} type="text" placeholder="Name"/>
            <input className={styles.control} type="text" placeholder="Surname"
                   required/>
            <input className={styles.control} type="email" placeholder="Email"
                   required/>
            <input className={styles.control} type="password"
                   placeholder="Password" required/>
            <input className={styles.control} type="password"
                   placeholder="Confirm password" required/>
            <button className={styles.submit}> Submit</button>
          </form>
        </div>
        <Footer/>
      </>
    );
  }
}




