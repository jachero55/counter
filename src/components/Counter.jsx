import React, { useState } from 'react'
import styled from 'styled-components'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Container = styled.div`
  background: #4A8FE7;
  padding: 2rem;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45vw;
  border-radius: .3rem;
`
const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 3rem;
  text-align: center;
  letter-spacing: .3rem;
  font-weight: 700;
`
const CounterContainer = styled.div`
  background: #59D2FE;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`
const NumberCount = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  margin: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  border: none;
  background: #222;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`
const Mess = styled.p`

`
const Counter = () => {
const [ counter, setCounter ] = useState(0)

const increaseCounter =()=> {
  setCounter(counter + 1)
}

const decreaseCounter = () => {
  if(counter > 0) {
    setCounter(counter - 1)
  }else {
    
  }
}
  return (
    <Container>
      <Title>React Counter</Title>
      <CounterContainer>
        <NumberCount>{counter}</NumberCount>
        <ButtonContainer>
          <Button onClick={decreaseCounter}>{<BsArrowLeft />}</Button>
          <Button onClick={increaseCounter}>{<BsArrowRight />}</Button>
        </ButtonContainer>
      </CounterContainer>
    </Container>
  )
}

export default Counter
