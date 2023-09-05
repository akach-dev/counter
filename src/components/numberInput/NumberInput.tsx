import React, {ChangeEvent, FC} from 'react';
import {S} from "./NumberInput_Styles";

type NumberInputPropsType = {
  value: number
  setValue: (value: number) => void
  error: string
}

export const NumberInput: FC<NumberInputPropsType> = ({value, setValue, error}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  };
  return <S.Input type="number" value={value} onChange={onChangeHandler} error={error}/>
};

