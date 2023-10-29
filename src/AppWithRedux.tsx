import {S} from "./App_Styles";
import {useCount} from "./hooks/useCounter";
import {Button} from "./components/button/Button";
import {NumberInput} from "./components/numberInput/NumberInput";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {setMaxValueAC} from "./bll/maxValueReducer";
import {incrementAC, resetAC, setContToLocalStorageAC} from "./bll/countReducer";


function AppWithRedux() {

  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  const maxValue = useSelector<AppRootStateType, number>(state => state.maxStateValue.maxValue)
  const count = useSelector<AppRootStateType, number>(state => state.counter.count)


  const setMaxValue = (value: number) => dispatch(setMaxValueAC(value))

  const error = count < 0 || maxValue <= count

  const setHandler = () => setIsOpen(!isOpen)

  const resetHandler = () => {
    localStorage.clear()
    dispatch(resetAC())
  }

  const setCounter = (value: number) => dispatch(setContToLocalStorageAC(value))

  const increment = () => dispatch(incrementAC())

  return (
     <S.App>
       {isOpen ? (
          <S.Wrapper>
            <S.Values>
              <S.Value>
                <span>max value: </span>
                <NumberInput value={maxValue} setValue={setMaxValue} error={error.toString()}/>
              </S.Value>
              <S.Value>
                <span>start value: </span>
                <NumberInput value={count} setValue={setCounter} error={error.toString()}/>
              </S.Value>
            </S.Values>
            <S.ButtonWrapper>
              <Button disabled={error} callback={setHandler} name={'set'}/>
            </S.ButtonWrapper>
          </S.Wrapper>
       ) : (
          <S.Wrapper>
            <S.Counter maxvalue={maxValue} counter={count}>{count}</S.Counter>
            <S.CounterButtons>
              <Button disabled={count >= maxValue} callback={increment} name={"increment"}/>
              <Button disabled={!count} callback={resetHandler} name={'reset'}/>
              <Button callback={setHandler} name={'set'}/>
            </S.CounterButtons>
          </S.Wrapper>
       )
       }
     </S.App>
  );
}

export default AppWithRedux;


