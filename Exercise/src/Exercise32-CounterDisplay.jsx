/* Extract the h2 tag showing the counter state variable into a new component called CounterDisplay 
and render it within the Counter component, passing it the count state variable as a prop */

export function CounterDisplay({label}) {
    
  return <h2>Counter: {label} </h2>
}
