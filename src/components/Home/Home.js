import React, { Component } from 'react'
import styles from './Home.module.scss';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div id={styles.top}>
          <ul id={styles.nav_bar}>
            <li><a href="/src/components/Home/Home.js">Home</a></li>
            <li><a href="/src/components/About/About.js">About</a></li>
            <li><a href="#">Sign up</a></li>
            <li><a href="#">Sign in</a></li>
          </ul>
        </div>
        <div id={styles.image}>

        </div>
        <div id={styles.app_name}>
            <h1>Reactive Restaurant</h1>
        </div>



        <div id={styles.bottom}>

        </div>

      </React.Fragment>


    )
  }
}
