/*
Modify the Welcome component so that the Age component is rendered only if the age prop is present.
*/

export function Age({age}){
    return (age&&<h1>Your age is {age}</h1>)
}