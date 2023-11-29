import React from 'react';

export interface LabelProps {
  label: string;
  customClassName: String;
}

const Label = (props: LabelProps) => {
  const { customClassName = '', label = '' } = props;
  return <button className={`text-base text-black ${customClassName}`}>{label}</button>;
};

export default Label;
