import { Welcome } from "./Exercise23-Welcome"

export function App(){
    return (
        <div>
            <Welcome ages={23}/>
            <Welcome ages={14}/>
            <Welcome ages={89}/>
        </div>
    )
}