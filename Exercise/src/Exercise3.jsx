/* 
What happens if the name variable is not passed to the function?
*/

export function VariableName(){
    const unNamed= <h1>Hello , Undefinded</h1>
    return (
        <div>
            {unNamed}
        </div>
    )        
}