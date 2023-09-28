/*
Modify the Welcome component so that the Age component
is rendered only if the age prop is greater than 18 and 
less than 65 and the name prop is equal to "John".
*/
import {Age} from "./Exercise24-Age"

export function Welcome({name,age}){
    return (
        <div>
            <h1>{name==="John"&& name} </h1>
            <h2><Age age={age}/></h2>
        </div>
    )
}