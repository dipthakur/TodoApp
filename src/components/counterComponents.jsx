import React, {useState} from "react";


const Counter = () =>{
    const [count, setCount]= useState(0);
    return (
        <div>
            <p>Count Components {count} </p>
            <h6>Number is {count % 2 === 0 ? "Even" : "Odd"}</h6>
            <button onClick={()=>{setCount(count + 1)}}>Increment</button>
            <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
        </div>
    )
}

export default Counter;