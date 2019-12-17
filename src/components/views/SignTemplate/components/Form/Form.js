import React from 'react';
import styles from './Form.module.scss';

const Form = props => {
  return (
    <form className={styles.formTemplate}>
      {props.children}
    </form>
  );
};

export default Form;

