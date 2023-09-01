import styled from "styled-components";

type CounterPropsType = {
  counter: number
}


const App = styled.div`
  height: 100vh;
  background-color: darkcyan;
  display: flex;
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
  color: ${({counter}) => counter === 5 && 'red'};
`

const CounterButtons = styled.div`
  border: 2px solid bisque;
  border-radius: 5px;
  padding: .3rem;

  & :not(:last-child) {
    margin-right: 1rem;
  }
`

export const S = {
  App, Wrapper, Counter, CounterButtons
}
