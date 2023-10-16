/* Extract the h2 tag showing the counter state variable into a new component called CounterDisplay 
and render it within the Counter component, passing it the count state variable as a prop */
import { Counter } from "./Exercise32-Counter";

export function App(){
    return <Counter a={1} b={2}/>
}