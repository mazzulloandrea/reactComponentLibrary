import React from 'react';

export interface ButtonProps {
  customClassName: string;
  label: String;
}

const Button = (props: ButtonProps) => {
  const { customClassName = '', label = '' } = props;
  return <button className={`h8 rounded-md ${customClassName}`}>{label}</button>;
};

export default Button;
