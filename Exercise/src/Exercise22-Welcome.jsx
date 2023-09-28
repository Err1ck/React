/*
Modify the Welcome component so that the Age component is rendered only if the age prop is present.
*/
import { Age } from "./Exercise22-Age"

export function Welcome({age}){
    return (
        age&&<h1>Your age is <Age age={age}/></h1>
        )
}