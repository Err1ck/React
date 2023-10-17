/* Add an onClick event handler to the image that prints the src of the image to the console. 
Does the name attribute of the button still get printed to the console when the image is clicked? Why? */

export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }
  function handleImageClick(event){
    console.log(event.target.src)
  }

  return (
    <button name={"buttonName"} onClick={handleButtonClick}>
      <img name={"image"} width={16} height={16} src="none" onClick={handleImageClick}/>
      Click
    </button>
  );
}
/* En mi caso no, porque el target de boton solo se activa cuando no le doy a la imagen */
