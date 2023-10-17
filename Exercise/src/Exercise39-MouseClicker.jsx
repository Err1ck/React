/* How can you prevent the name attribute of the button from 
being printed to the console when the image is clicked? */

export function MouseClicker() {
    function handleButtonClick(event) {
      console.log(event.currentTarget.name);
    }
    function handleImageClick(event) {
      console.log(event.currentTarget.getAttribute("src"));
      event.stopPropagation()
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