import { Age } from "./Exercise-Age";

export function Welcome ({age}){
    return (
        <div>
            {age>=18&&<h1>Welcome Erick with <Age age={age}/> old</h1>  }
        </div>
    )
}