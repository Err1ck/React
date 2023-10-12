/*
Modify the Age component so that the 
"Your age is" message is rendered only if the age prop is greater than 18.
 Otherwise render the "You are very young!" message.
*/
import { Age } from "./Exercise25-Age";

export function Welcome({age}){
    return <Age age={age}/>
}