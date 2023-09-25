/*
What happens if the name variable contains a JSX expression instead of a string?
*/

export function VariableName(){
    const jsxExpression=<h1>Hi, Erick</h1>
    return jsxExpression
}