/*
Modify the Welcome component 
so that the Age component is rendered only if the age prop is greater than 18 and less than 65.
*/
import { Age } from "./Exercise23-Age";

export function Welcome({ages}){
    return <Age age={ages}/>
}