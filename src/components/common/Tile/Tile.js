import React from 'react';
import styles from './Tile.module.scss';
import {Link} from 'react-router-dom';

export const Tile = (props) => {

  const {vertical, path, photo, label} = props;

  return (
    <div className={styles.Container}>
      <Link to={path}>
        <img src={photo} alt="burger"
             className={vertical ? styles.foodVert : styles.foodHoriz}/>
      </Link>
      <Link className={styles.foodLink} to={path}>
        <p className={styles.foodText}>{label}</p>
      </Link>
    </div>
  );

};
