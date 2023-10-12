/*
Modify the Age component so that the 
"Your age is" message is rendered only if the age prop is greater than 18.
 Otherwise render the "You are very young!" message.
*/ 
export function Age({age}){
    return age>=18 ? <h1>"Your age is {age}"</h1>:<h1>"You are very young!"</h1>
}