import React from 'react';
import { ButtonStyled } from './styles';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: 'primary' | 'secondary'; // two styling options (you can create as many as you want)
  dimension?: 'small' | 'normal' | 'large'; //
  disabled?: boolean; // make the button disabled or not
  customClass?: string;
};

const Button = ({
  onClick = (e: object) => {
    console.log(e);
  },
  children = [],
  color = 'primary',
  dimension = 'small',
  disabled = false,
  customClass = '',
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      color={color}
      dimension={dimension}
      className={customClass}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
