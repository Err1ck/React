/* Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
Pass the current content of the input tag to the name prop of the Welcome component. 
The input tag should be a controlled component. */

export function Welcome({name}){
    return <p>Welcome, {name}!</p>
}
