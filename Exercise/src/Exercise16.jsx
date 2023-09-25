/*
Create a Welcome function component that receives a name prop and renders 
the Welcome,{name}! message within a p tag. 
Render this component to you App component, 
passing it a name prop of your choosing.
*/

export function Welcome({name}){
    return <p> Welcome, {name}!</p>
}