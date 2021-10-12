import React, {useState} from 'react';
import './App.css'

export default function App({initialData = 0}){
  const [data, setData]=useState(initialData);
  function decrementData(){
    setData(prevData => prevData - 1);
  }
  function incrementData(){
    setData(prevData => prevData + 1);
  }
  return(
    <div className = "box">
      <span>{data}</span>
      <div className="button">
      <button onClick = {decrementData}>-</button>
      <button onClick = {incrementData}>+</button>
      </div>
    </div>
  )
}