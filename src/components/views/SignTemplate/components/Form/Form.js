import React from 'react';
import styles from './Form.module.scss';

const Form = props => {
  const { handleSubmit } = props;

  return (
    <form className={styles.formTemplate} onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
};

export default Form;

