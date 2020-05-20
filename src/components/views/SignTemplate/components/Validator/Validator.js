import React from 'react';
import styles from './Validator.module.scss';

const Validator = props => {
  const { message } = props;
  return (
    <p className={styles.validator}>{message}</p>
  );
};

export default Validator;
