/* Add a decrement button and a reset button to the Counter component. 
The decrement button should decrement the counter by the amount passed as a prop, 
and the reset button should reset the counter to the initial value passed as a prop. */

import { useState } from "react";
import { Button } from "./Exercise33-Button";
import { CounterDisplay } from "./Exercise33-CounterDisplay";

export function Counter({a,b}){
    const [count,setCount]=useState(a)

    function incrementCounter(){
        setCount((a)=>a+b)
    }
    function decrementCounter(){
        setCount((a)=>a-b)
    }
    function resetCounter(){
        setCount((a)=>a-a)
    }
    return(
        <div>
            <CounterDisplay label={count}/>
            <Button onClick={incrementCounter} label={"Increment"}/>
            <Button onClick={decrementCounter} label={"Decrement"}/>
            <Button onClick={resetCounter} label={"Reset"}/>
        </div>
    )
}