import React, {FC, memo} from 'react';
import styled from "styled-components";

type ButtonPropsType = {
  callback: () => void
  name: string
  disabled?: boolean
}

export const Button: FC<ButtonPropsType> = memo(({name, callback, disabled}) => {

  return <StyledButton disabled={disabled} onClick={callback}>{name}</StyledButton>
});

const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 2px 10px;
  border-radius: 5px;
  border: 2px solid bisque;

`

