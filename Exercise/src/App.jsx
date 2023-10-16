/* Add a decrement button and a reset button to the Counter component. 
The decrement button should decrement the counter by the amount passed as a prop, 
and the reset button should reset the counter to the initial value passed as a prop. */
import { Counter } from "./Exercise33-Counter";

export function App(){
    return <Counter a={1} b={3}/>
}