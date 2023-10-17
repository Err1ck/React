/* Add an onClick event handler to the image that prints the src of the image to the console. 
Does the name attribute of the button still get printed to the console when the image is clicked? Why? */

export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }
  function handleImageClick(event) {
    console.log(event.currentTarget.getAttribute("src"));
  }

  return (
    <button name={"buttonName"} onClick={handleButtonClick}>
      <img
        name={"image"}
        width={36}
        height={36}
        src="none"
        onClick={handleImageClick}
      />
      Click
    </button>
  );
}