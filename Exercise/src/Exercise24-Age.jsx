/*
Modify the Welcome component so that the Age component
is rendered only if the age prop is greater than 18 and 
less than 65 and the name prop is equal to "John".
*/

export function Age ({age}){
    return (age>=18 && age<=65 && age)
}