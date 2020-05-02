import React from 'react';
import styles from './Submit.module.scss';

const Submit = (props) => {
  return (
    <button className={styles.submit}>{props.label}</button>
  );
};

export default Submit;
