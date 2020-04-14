import React from 'react';
import styles from './AfterSignIn.module.scss';
import burger from '../../../assets/burger.png';
import drink from '../../../assets/drink.png';
import fries from '../../../assets/fries.png';
import sandwich from '../../../assets/sandwich.png';
import {mainRoutes} from '../../../routes';
import {Link} from 'react-router-dom';
import {NavbarWithLogo} from '../../common/Navbar/Navbar';
import {Footer} from '../../common/Footer/Footer';


export const AfterSignIn = props => {

  const {root} = mainRoutes;

  return (
      <>
      <NavbarWithLogo/>
      <h1 className={styles.title}>What would you like to order today?</h1>

      <ul className={styles.box}>

<li><div className={styles.Container}>
            <Link to={root}>
          <img src={burger} alt="burger" className={styles.food}/>
        </Link>
        <Link className={styles.foodLink} to={root}>
          <p className={styles.foodText}>Burger</p>
        </Link>
      </div></li
      ><li><div className={styles.Container}>
            <Link to={root}>
          <img src={drink} alt="drink" className={styles.food}/>
        </Link>
        <Link className={styles.foodLink} to={root}>
          <p className={styles.foodText}>Drink</p>
        </Link>
      </div></li>
    </ul>

      <ul className={styles.box}>
      <li><div className={styles.Container}>
            <Link to={root}>
          <img src={fries} alt="fries" className={styles.food}/>
        </Link>
        <Link className={styles.foodLink} to={root}>
          <p className={styles.foodText}>French Fries</p>
        </Link>
      </div></li
><li><div className={styles.Container}>
            <Link to={root}>
          <img src={sandwich} alt="sandwich" className={styles.food}/>
        </Link>
        <Link className={styles.foodLink} to={root}>
          <p className={styles.foodText}>Sandwich</p>
        </Link>
      </div></li>
      </ul>
      <Footer/>
      </>
  );
};
export default AfterSignIn;