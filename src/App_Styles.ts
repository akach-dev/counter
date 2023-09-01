import styled from "styled-components";


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
`

const Counter = styled.div`
  width: 70%;
  background-color: white;
  padding: 40px;
  text-align: center;
  font-size: 3rem;
`

const CounterButtons = styled.div`
  padding: .3rem;

`

export const S = {
  App, Wrapper, Counter, CounterButtons
}
