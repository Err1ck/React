/* Create an index.css file and import it within the index.jsx file. Add a .welcome class to the Welcome component that sets its background color and adds a border. */

import { Welcome } from "./Exercise60-Welcome";

export function App({className}){
    return <Welcome className={className} name={"Erick"} />
}