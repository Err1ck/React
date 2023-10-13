/*
Create an AlertClock function component that renders a button. 
When the button is clicked, an alert should be shown with the current time. 
Tip: use the Date object to get the current time.
*/

export function AlertClock(){
    function handleButtononClick(){
        alert('Current time: '+ new Date().toLocaleTimeString())
    }
    return(
        <div>
            <button onClick={handleButtononClick}>Click</button>
        </div>
    )
}
