import React from 'react';

const Button = props => {
  const { label = '' } = props;
  return <button style="rounded-md">{label}</button>;
};

export default Button;
