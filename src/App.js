import React, {useState} from 'react';
import './App.css'

export default function App(){
  const [data, setData]=useState(0);
  <span>{data}</span>
  return(
    <>  
       {data}
       {setData}
    </>
  );
}