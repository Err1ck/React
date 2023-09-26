/*
What happens if no name prop is passed to the Welcome component?
Can you set a default value for the name prop?
*/

export function Welcome({name}){
    return (
        <div>
            <h1>Welcome {name} </h1>
        </div>
    )
}

export function Welcome2({name}){
    return (
        <div>
            {name? <h1>Welcome {name} </h1>:<h1>Welcome Unnamed </h1> }   
        </div>
    )
}