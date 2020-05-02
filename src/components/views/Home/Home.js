import React from 'react';
import styles from './Home.module.scss';
import {NavbarWithMenu} from '../../common/Navbar/Navbar';
import {Footer} from '../../common/Footer/Footer';

const Home = props => {

  return (
    <>
      <NavbarWithMenu/>
      <div className={styles.image}>
      </div>
      <div className={styles.appName}>
        <h1 className={styles.title}>Reactive Restaurant</h1>
      </div>
      <Footer/>
    </>
  );

};
export default Home;


