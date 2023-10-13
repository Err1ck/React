/* Render the AlertClock component within the App component. */

export function App(){
    function AlertClock(){
        alert("Exercise 27. Current Time: "+new Date().toLocaleTimeString())
    }
    return(
        <div>
            <button onClick={AlertClock}> Click</button>
        </div>
    )
}