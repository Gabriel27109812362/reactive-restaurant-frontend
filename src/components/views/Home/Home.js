import React from 'react';
import styles from './Home.module.scss';
import {NavbarWithMenu} from '../../common/Navbar/Navbar';
import {Footer} from '../../common/Footer/Footer';
import logo from '../../../assets/logo.png';

const Home = props => {

  return (
    <>
      <NavbarWithMenu/>
      <div className={styles.appName}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <h1 className={styles.title}>Reactive Restaurant</h1>
      </div>
      <Footer/>
    </>
  );

};
export default Home;
