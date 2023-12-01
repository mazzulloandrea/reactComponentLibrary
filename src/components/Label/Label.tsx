import React from 'react';

export interface LabelProps {
  label: string;
  customClassName: string;
}

const Label = (props: LabelProps) => {
  const { customClassName = '', label = '' } = props;
  return <span className={`text-base text-black ${customClassName}`}>{label}</span>;
};

export default Label;
