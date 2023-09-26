import { Age } from "./Exercise20-Age";

export function Welcome ({age,name}){
    return (
        <div>
            <h1>Welcome {name}</h1>
            <h2>Your Age is <Age age={age}/> </h2>
        </div>
    )
}