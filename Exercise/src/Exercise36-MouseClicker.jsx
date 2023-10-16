/* Create a MouseClicker component that contains a button with a name prop set to the "one" string. 
Attach an event handler to the button that prints the name prop to the console 
when clicked by reading the event.target.name property. */

export function MouseClicker({mouseName}){
    function handleButtonClick(event){
        console.log(event.target.name)
    }

 return <button name={mouseName} onClick={handleButtonClick}>Click</button>   
}