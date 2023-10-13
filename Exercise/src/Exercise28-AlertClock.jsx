/* Make it so that the event handler is received as a prop by the AlertClock component,
 instead of being implemented within the component itself. */

export function AlertClock({ label }) {
  function handleButtonClick() {
    alert("Current time: " + new Date().toLocaleTimeString());
  }
  return <button onClick={handleButtonClick}> {label} </button>;
}
