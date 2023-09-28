/*

Extract the "Your age is" message into a new component called Age and render it within the Welcome component. 
Pass to the Age component the age prop that Welcome is receiving from the App component.

*/
import { Age } from "./Exercise20-Age";

export function Welcome ({name,age}){
    return (
        <div>
            <h1>Welcome {name}</h1>
            <h2>Your Age is <Age age={age}/></h2>
        </div>
    )
}