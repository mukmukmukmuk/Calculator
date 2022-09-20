import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

const CalculatorWrap = styled.div`
  background-color: pink;
  width: 500px;
  height: 809px;
  border-radius:7%;
`

const EmptySpace =styled.div`
  width: 470px;
  height: 120px;
  margin-left:10px;
  margin-right:10px;
`

const CalculatorResult=styled.div`
  background-color: #B1F4F5;
  width: 470px;
  height:130px;
  font-size: 6em;
  color: white;
  text-align: right;
  margin-left:10px;
  margin-right:10px;
  border-radius:20px;
  font-weight:600;
`

const CalculatorNumber = styled.div`
  background-color: #EA97D9;
  width: 110px;
  height: 90px;
  text-align: center;
  color: #FFFFFF;
  font-size: 4em;
  font-weight:600;
  border-radius:20px;
  margin-top: 15px;
`

function App() {
  const [result,setResult]=useState(0); // 결과 저장
  const [temp,setTemp]=useState(0); //중간 값
  const [view,setView]=useState(0); //보여주는 값
  const [chk,setChk]=useState(''); //연산자 저장
 
  function onNumber(n){
    if(chk==''){
      if(result<0){
        setResult(-1*n+result*10);
        setView(-1*n+result*10);
      }
      else{
        setResult(n+result*10);
        setView(n+result*10);
      }
    }
    else{
      if(temp<0){
        setTemp(-1*n+temp*10);
        setView(-1*n+temp*10);
      }
      else{
        setTemp(n+temp*10);
        setView(n+temp*10);
      }
    }
  }

  function onPlusClick(){
    if(result!=0){
      if(chk=='+'){
        setResult(temp+result)
        setView(result+temp);
      }
      else if(chk=='-'){
        setResult(result-temp);
        setView(result-temp);
      }
      else if(chk=='*'){
        setResult(result*temp);
        setView(result*temp);
      }
      else if(chk=='/'){
        setResult(result/temp);
        setView(result/temp);
      }
      setChk('+');
      setTemp(0);
    }
  }

  function onMinusClick(){
    if(result!=0){
      if(chk=='+'){
        setResult(temp+result)
        setView(result+temp);
      }
      else if(chk=='-'){
        setResult(result-temp);
        setView(result-temp);
      }
      else if(chk=='*'){
        setResult(result*temp);
        setView(result*temp);
      }
      else if(chk=='/'){
        setResult(result/temp);
        setView(result/temp);
      }
      setChk('-');
      setTemp(0);
    }
  }

  function onTimesClick(){
    if(result!=0){
      if(chk=='+'){
        setResult(temp+result)
        setView(result+temp);
      }
      else if(chk=='-'){
        setResult(result-temp);
        setView(result-temp);
      }
      else if(chk=='*'){
        setResult(result*temp);
        setView(result*temp);
      }
      else if(chk=='/'){
        setResult(result/temp);
        setView(result/temp);
      }
      setChk('*');
      setTemp(0);
    }
  }

  function onDivisionClick(){
    if(result!=0){
      if(chk=='+'){
        setResult(temp+result)
        setView(result+temp);
      }
      else if(chk=='-'){
        setResult(result-temp);
        setView(result-temp);
      }
      else if(chk=='*'){
        setResult(result*temp);
        setView(result*temp);
      }
      else if(chk=='/'){
        setResult(result/temp);
        setView(result/temp);
      }
      setChk('/');
      setTemp(0);
    }
  }

  function onPercentClick(){
    if(temp==0){
      setResult(result*0.01);
      setView(result*0.01);
    }
    else{
      setTemp(temp*0.01);
      setView(temp*0.01);
    }
  }

  function onPlusMinusClick(){
    if(temp==0){
      setResult(result*-1);
      setView(result*-1);
    }
    else{
      setTemp(temp*-1);
      setView(temp*-1);
    }
  }

  function onZeroClick(){
    if(temp==0){
      setResult(result*10);
      setView(result*10);
    }
    else{
      setTemp(temp*10);
      setView(temp*10);
    }
  }

  function onZeroZeroClick(){
    if(temp==0){
      setResult(result*100);
      setView(result*100);
    }
    else{
      setTemp(temp*100);
      setView(temp*100);
    }
  }

  function onClearClick(){
    setResult(0);
    setTemp(0);
    setView(0);
  }

  function onResultClick(){
    if(chk=='+'){
      setResult(temp+result)
      setView(result+temp);
    }
    else if(chk=='-'){
      setResult(result-temp);
      setView(result-temp);
    }
    else if(chk=='*'){
      setResult(result*temp);
      setView(result*temp);
    }
    else if(chk=='/'){
      setResult(result/temp);
      setView(result/temp);
    }
    //초기화
    setChk('');
    setTemp(0);
  }

  return(
    <CalculatorWrap>
      <EmptySpace></EmptySpace>
      <div>
        <CalculatorResult>{view}</CalculatorResult>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <CalculatorNumber onClick={onClearClick}>AC</CalculatorNumber>
          <CalculatorNumber onClick={onPlusMinusClick}>±</CalculatorNumber>
          <CalculatorNumber onClick={onPercentClick}>%</CalculatorNumber>
          <CalculatorNumber onClick={onDivisionClick}>÷</CalculatorNumber>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <CalculatorNumber onClick={()=>onNumber(1)}>1</CalculatorNumber>
          <CalculatorNumber onClick={()=>onNumber(2)}>2</CalculatorNumber>
          <CalculatorNumber onClick={()=>onNumber(3)}>3</CalculatorNumber>
          <CalculatorNumber onClick={onTimesClick}>×</CalculatorNumber>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <CalculatorNumber onClick={()=>onNumber(4)}>4</CalculatorNumber>
          <CalculatorNumber onClick={()=>onNumber(5)}>5</CalculatorNumber>
          <CalculatorNumber onClick={()=>onNumber(6)}>6</CalculatorNumber>
          <CalculatorNumber onClick={onMinusClick}>-</CalculatorNumber>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <CalculatorNumber onClick={()=>onNumber(7)}>7</CalculatorNumber>
          <CalculatorNumber onClick={()=>onNumber(8)}>8</CalculatorNumber>
          <CalculatorNumber onClick={()=>onNumber(9)}>9</CalculatorNumber>
          <CalculatorNumber onClick={onPlusClick}>+</CalculatorNumber>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <CalculatorNumber onClick={onZeroClick}>0</CalculatorNumber>
          <CalculatorNumber onClick={onZeroZeroClick}>00</CalculatorNumber>
          <CalculatorNumber>쩜</CalculatorNumber>
          <CalculatorNumber onClick={onResultClick}>=</CalculatorNumber>
        </div>
      </div>
    </CalculatorWrap>
  );
}

export default App;