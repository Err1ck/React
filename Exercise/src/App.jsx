import { Welcome } from "./Exercise24-Welcome";

export function App(){
    return (
        <div>
            <Welcome name="John" age={21} />
            <Welcome name="Erick" age={11} />   
        </div>
    )
}