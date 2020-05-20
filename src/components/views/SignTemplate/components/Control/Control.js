import React from 'react';
import styles from './Control.module.scss';

const Control = props => {

  const { placeholder, onChange, type, value, name } = props;

  return (
    <input className={styles.control} type={type} name={name}
           onChange={onChange}
           value={value}
           placeholder={placeholder}/>
  );
};

export default Control;
