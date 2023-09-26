/*
Modify the Welcome component 
so that the Age component is rendered only if the age prop is greater than 18 and less than 65.
*/

export function Age({age}){
    return (
        <div>
            {age>18 && age<65 ? <h1>Your age is {age}</h1> : <h1>Your age is out of the range</h1> }
        </div>
    )
}