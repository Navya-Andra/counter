import React, {useState} from 'react'
import App from './App'
import './App.css'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


export default function counter(){

    const [data, setData]=useState(0);

    const dataToCounter = (data) =>{
        setData(data);
    }

    const decrementData = () => {
        setData(prevData => prevData - 1);
    };

    const incrementData = () => {
        setData(prevData => prevData + 1);
    };
    return(
        <div className = "box">
        <App/>
        <Stack direction="row" spacing={5}>
        <Button variant="contained" color="error" onClick = {() => decrementData()}>
          -
        </Button>
        <Button variant="contained" color="success" onClick = {() => incrementData()}>
          +
        </Button>
      </Stack>
      </div>
    )
}