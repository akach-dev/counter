import React, {FC} from 'react';

type ButtonPropsType = {
  callback: () => void
  name: string
}

export const Button: FC<ButtonPropsType> = ({name, callback}) => {
  return <button onClick={callback}>{name}</button>
};

