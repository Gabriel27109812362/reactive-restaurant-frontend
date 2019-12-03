import React, {Component} from 'react';
import styles from './Home.module.scss';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className={styles.top}>
          <ul className={styles.nav_bar}>
            <li className={styles.nav_bar_li}>
              <a className={styles.nav_bar_a}
                 href="/src/components/Home/Home.js">Home</a>
            </li>
            <li className={styles.nav_bar_li}>
              <a className={styles.nav_bar_a}
                 href="/src/components/About/About.js">About</a>
            </li>
            <li className={styles.nav_bar_li}>
              <a className={styles.nav_bar_a} href="#">Sign up</a>
            </li>
            <li className={styles.nav_bar_li}>
              <a className={styles.nav_bar_a} href="#">Sign in</a>
            </li>
          </ul>
        </div>
        <div className={styles.image}>
        </div>
        <div className={styles.app_name}>
          <h1>Reactive Restaurant</h1>
        </div>
        <div className={styles.bottom}>
        </div>
      </>
    );
  }
}



