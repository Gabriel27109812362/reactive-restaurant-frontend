import React from 'react';
import styles from './Control.module.scss';

const Control = props => {
  return (
    <input className={styles.control} type={props.type}
           placeholder={props.placeholder}/>
  );
};

export default Control;
