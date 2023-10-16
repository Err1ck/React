/* Add a decrement button and a reset button to the Counter component. 
The decrement button should decrement the counter by the amount passed as a prop, 
and the reset button should reset the counter to the initial value passed as a prop. */

export function CounterDisplay({label}){
    return <h2>Counter: {label} </h2>
}