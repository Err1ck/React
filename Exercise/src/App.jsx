/* Modify the Counter component so that whenever the value of the counter changes, the value of a ref is updated to contain the direction of the change (i.e. "up" or "down") relative to the initialValue prop. Print the value of the ref to the console only when it's different from the previous value. */

import { Counter } from "./Exercise52-Counter";

export function App(){
    return <Counter a={0} b={2}/>
}