import React, {Component} from 'react';
import styles from './SignUp.module.scss';

export default class SignUp extends Component {
  
  render() {

    return (
      <>
        <div className={styles.top}>
          <div className={styles.nav_bar}>
            Reactive Restaurant
          
          </div>
        
        </div>
        <div className={styles.main}> 
          <p className={styles.sign_up}>
            Sign Up  </p>
            <div className={styles.wrapper}>
            <form>

            <input type="text" placeholder="Name" name="name" required />
            <p></p>
            <input type="text" placeholder="Surname" name="surname" required />
            <p></p>
            <input type="email" placeholder="Email" name="email" required />
            <p></p>
            <input type="password" placeholder="Password" name="psw" required />
            <p></p>
            <input type="password" placeholder="Confirm password" name="psw" required />
            

          </form>
          <p></p>
          <p></p>
          <button className={styles.submit_button}> Submit </button>
           </div>
         
        
         </div>
        <div className={styles.bottom}>
        </div>
      </>
    );
  }
}




