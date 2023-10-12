/*
What happens if no name prop is passed to the Welcome component?
Can you set a default value for the name prop?
*/

export function Welcome({name="Erick"}){
    return (
        <div>
            <h1>Welcome {name} </h1>
        </div>
    )
}