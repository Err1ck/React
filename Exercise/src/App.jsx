/* Create a MouseClicker component that contains a button with a name prop set to the "one" string. 
Attach an event handler to the button that prints the name prop to the console 
when clicked by reading the event.target.name property. */

import { MouseClicker } from "./Exercise36-MouseClicker";

export function App(){
    return <MouseClicker mouseName={"ButtonName"}/>
}