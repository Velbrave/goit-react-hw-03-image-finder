import css from './Button.module.css';
import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button className={css.Button} type="button" onClick={onClick}>
      load more
    </button>
  );
};

export default Button;
