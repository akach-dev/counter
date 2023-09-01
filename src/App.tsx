import React from 'react';
import {S} from "./App_Styles";
import {useCount} from "./hooks/useCounter";
import {Button} from "./components/Button";


function App() {
  const {reset, increment, counter} = useCount(0)
  return (
     <S.App>
       <S.Wrapper>
         <S.Counter counter={counter}>{counter}</S.Counter>
         <S.CounterButtons>
           <Button disabled={counter > 4} callback={increment} name={"increment"}/>
           <Button disabled={!counter} callback={reset} name={'reset'}/>
         </S.CounterButtons>
       </S.Wrapper>
     </S.App>
  );
}

export default App;


