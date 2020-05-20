import React from 'react';
import styles from './Menu.module.scss';
import burger from '../../../assets/Burger.svg';
import drink from '../../../assets/Drink.svg';
import fries from '../../../assets/Fries.svg';
import sandwich from '../../../assets/Sandwich.svg';
import { mainRoutes } from '../../../routes';
import { NavbarWithLogo } from '../../common/Navbar/Navbar';
import { Footer } from '../../common/Footer/Footer';
import { Tile } from '../../common/Tile/Tile';

export const Menu = props => {

  const { root } = mainRoutes;

  return (
    <>
      <NavbarWithLogo/>
      <div className={styles.container}>
        <h1 className={styles.title}>What would you like to order today?</h1>
        <div className={styles.tilesBox}>
          <Tile path="/" photo={burger} label="Burger"/>
          <Tile path="/" photo={drink} label="Drink"/>
          <Tile path="/" photo={fries} label="French Fries"/>
          <Tile horizontalal path="/" photo={sandwich} label="Sandwich"/>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Menu;
