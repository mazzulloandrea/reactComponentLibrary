import tw from 'tailwind-styled-components';
import { ButtonProps } from './Button';
import '../../global.css';

const defaultProps = 'font-semibold py-2 px-4 border rounded shadow';

const primary = `bg-white hover:bg-gray-100 text-gray-800`;
const secondary = `bg-blue-500 hover:bg-blue-700 text-white`;

const small = 'w-20';
const normal = 'w-40';
const large = 'w-60';

const disabled = `opacity-50 cursor-not-allowed`;

export const ButtonStyled = tw.button<ButtonProps>`
  font-semibold py-2 px-4 border rounded shadow
  ${props =>
    props.color === 'primary'
      ? 'bg-white hover:bg-gray-100 text-gray-800'
      : 'bg-blue-500 hover:bg-blue-700 text-white'}
  ${props =>
    props.dimension === 'small' ? 'w-20' : props.dimension === 'normal' ? 'w-40' : 'w-60'}
`;
// export const ButtonStyled = tw.button<ButtonProps>`
//   ${defaultProps};
//   ${props => (props.color === 'primary' ? primary : secondary)}
//   ${props => (props.dimension === 'small' ? small : props.dimension === 'normal' ? normal : large)}
//   ${props => (props.disabled ? disabled : '')}
// `;
