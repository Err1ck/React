/* Add an image inside the button and, 
without creating a new event handler or attaching an event handler to the image, 
print the name attribute of the button regardless of whether the button or the image is clicked. */

export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.target.name,event.currentTarget)
    }

 return <button name={"buttonName"} onClick={handleButtonClick}><img name={"image"} width={16} height={16}/> Click</button>   
}