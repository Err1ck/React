/* Create an index.css file and import it within the index.jsx file. Add a .welcome class to the Welcome component that sets its background color and adds a border. */

export function Welcome({name,className}){
    return(
        <div>
            <h1 className={className}>Welcome {name}</h1>
        </div>
    )
}