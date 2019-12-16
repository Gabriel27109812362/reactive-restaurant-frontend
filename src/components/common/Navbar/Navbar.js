import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../assets/logo.png';
import {mainRoutes} from '../../../routes';
import {Link} from 'react-router-dom';

export const Navbar = props => {
  return (
    <div className={styles.topTemplate}>
      {props.children}
    </div>
  );
};

export const NavbarWithMenu = props => {

  const {root, about, signIn, signUp} = mainRoutes;

  const menu = () => (

    <ul className={styles.menuList}>
      <li>
        <Link className={styles.linkToTab} to={root}>Home</Link>
      </li>
      <li>
        <Link className={styles.linkToTab} to={about}>About</Link>
      </li>
      <li>
        <Link className={styles.linkToTab} to={signUp}>Sign
          up</Link>
      </li>
      <li>
        <Link className={styles.linkToTab} to={signIn}>Sign
          in</Link>
      </li>
    </ul>

  );

  return (
    <Navbar>
      {menu()}
    </Navbar>
  );
};

export const NavbarWithLogo = props => {

  const {root} = mainRoutes;


  return (
    <Navbar>
      <div className={styles.logoContainer}>
        <Link to={root}>
          <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
        <Link className={styles.logoLink} to={root}>
          <p className={styles.logoText}>Reactive Restaurant</p>
        </Link>
      </div>
      {props.children}
    </Navbar>
  );
};


