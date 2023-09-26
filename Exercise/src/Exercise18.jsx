/*
Modify the Welcome component so that it 
receives a second prop called age and renders it below the 'welcome' message,
within a p tag after the message "Your age is ".
*/

export function Welcome({name,age}){
    return (
        <div>
            <h1>Welcome {name}</h1>
            <p>Your age is {age}</p>
        </div>
    )
}