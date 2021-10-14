import React from 'react'
import App from './App'


export const counter = () => {
    props.App()
    const { data, setData } = props.data;
    const decrementData = data => {
        setData(prevData => prevData - 1);
    };

    const incrementData = data => {
        setData(prevData => prevData + 1);
    };

// the rendering of the component
    return (
        <div className = "box">
           <span>{data}</span>
             <div className="button">
                 <button onClick = {decrementData}>-</button>
                 <button onClick = {incrementData}>+</button>
             </div>
        </div>
    );
}