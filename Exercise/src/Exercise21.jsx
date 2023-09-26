/*
Modify the Welcome component so that the Age component is 
rendered only if the age prop is greater than 18.
*/

export function Welcome({age}){
    return(
        <div>
            {age>18? <h1>Yor age is {age}</h1>: <h1>You are too young</h1>}
        </div>
    )
}