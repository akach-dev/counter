import {S} from "./App_Styles";
import {useCount} from "./hooks/useCounter";
import {Button} from "./components/button/Button";
import {NumberInput} from "./components/numberInput/NumberInput";
import {useEffect, useState} from "react";


function App() {
  const [maxValue, setMaxValue] = useState(5)
  const [isOpen, setIsOpen] = useState(false)
  const {reset, increment, counter, setCounter} = useCount(0)

  useEffect(() => {
    const newMaxValue = localStorage.getItem('maxValue')
    const newStartValue = localStorage.getItem('startValue')

    if (newMaxValue && newStartValue) {
      const maxValue = JSON.parse(newMaxValue)
      const counter = JSON.parse(newStartValue)
      setMaxValue(maxValue)
      setCounter(counter)
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(counter))

  }, [maxValue, counter]);

  const error = counter < 0 || maxValue <= counter

  const setHandler = () => setIsOpen(!isOpen)

  const resetHandler = () => {
    reset()
    localStorage.clear()
  }

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
                <NumberInput value={counter} setValue={setCounter} error={error.toString()}/>
              </S.Value>
            </S.Values>
            <S.ButtonWrapper>
              <Button disabled={error} callback={setHandler} name={'set'}/>
            </S.ButtonWrapper>
          </S.Wrapper>
       ) : (
          <S.Wrapper>
            <S.Counter maxvalue={maxValue} counter={counter}>{counter}</S.Counter>
            <S.CounterButtons>
              <Button disabled={counter >= maxValue} callback={increment} name={"increment"}/>
              <Button disabled={!counter} callback={resetHandler} name={'reset'}/>
              <Button callback={setHandler} name={'set'}/>
            </S.CounterButtons>
          </S.Wrapper>
       )
       }
     </S.App>
  );
}

export default App;


