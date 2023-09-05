import styled from "styled-components";

type InputProps = {
  error: boolean
}

const Input = styled.input<InputProps>`
  text-align: center;
  padding: 7px 0;
  border-radius: 5px;
  border: 2px solid darkcyan;
  background-color: white;
  max-width: 50%;
`

export const S = {
  Input
}