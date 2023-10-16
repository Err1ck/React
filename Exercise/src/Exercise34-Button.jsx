/* Add a side effect to the Counter component from 
6.1 that prints the current value of the counter inside of the console. */

export function Button({ onClick, label }) {
  return <button onClick={onClick}> {label} </button>;
}
