import styled from 'styled-components';
import { memo } from 'react';

const StyledButton = styled.button`
  font-size: 20px;
  border: none;
  background: none;

  &:hover{
    color:white;
    background: #00000080;
  }
`;

interface ButtonProps {
  char?   : string,
  onClick : (char?:string) => void,

  className : string,
  children  : any,
};

const Button = (props: ButtonProps) => {
  const {
    char,
    onClick,
    ...otherProps
  } = props;

  const handleClick = () => { onClick(char)};

  return (
    <StyledButton { ...otherProps} onClick={ handleClick }/>
  );
}

export default memo(Button);
