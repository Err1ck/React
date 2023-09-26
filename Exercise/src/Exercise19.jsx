/*
What happens if the name prop is a JSX expression instead of a string?
How do you pass a prop that contains a JSX expression?
Modify the value passed to the name prop so that it's contained within a strong tag.
*/

export function Welcome({name,age}){
    return(
        <div>
            <h1>Welcome {name}</h1>
            <p>Your age is {age}</p>
        </div>
    )
}