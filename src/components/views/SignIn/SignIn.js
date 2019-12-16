

import React, { Component } from 'react';
import styles from './SignIn.module.scss';



export default class SignIn extends Component {
 render() {
   return (
    <div className={styles.top}>
    <li className={styles.logo}>
              <a className={styles.logo_a}
                 href="/src/components/Home/Home.js">Reactive Restaurant</a>
            </li>

       <h1>Sign In</h1>
       <form className={styles.login}>
        <h3>
        <input className={styles.input} type="text" placeholder="Email" />
        <br/>
        <br/>
      <input className={styles.input} type="password" placeholder="Password" />
      <br/>
      <br/>


      <button className={styles.button} type="submit">Submit</button>
         </h3>
       </form>

       <div className={styles.bottom}>
        </div>
        </div>
   )
 }
}
