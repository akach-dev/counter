import styled from "styled-components";

type CounterPropsType = {
  counter: number
  maxvalue: number
}


const App = styled.div`
  height: 100vh;
  background-color: darkcyan;
  display: flex;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  min-width: 280px;
  border: 2px solid bisque;
  border-radius: 5px;
  padding: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.3em;

`

const Counter = styled.div<CounterPropsType>`
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 40px;
  font-size: 3rem;
  color: ${({counter, maxvalue}) => counter === maxvalue && 'red'};
`

const CounterButtons = styled.div`
  border: 2px solid bisque;
  border-radius: 5px;
  padding: .3rem;

  & :not(:last-child) {
    margin-right: 1rem;
  }
`

const Values = styled.div`
  padding: 40px;
  border: 2px solid bisque;
  border-radius: 5px;

`
const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    font-weight: 600;
    color: rgba(45, 1, 47, 0.5);
  }
`
const ButtonWrapper = styled.div`
  border: 2px solid bisque;
  border-radius: 5px;
  padding: .3rem;
  width: 100%;
  text-align: center;
`

export const S = {
  App, Wrapper, Counter, CounterButtons, Values, Value, ButtonWrapper
}
