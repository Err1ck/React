/* Create a MultiButton component with three buttons, each with a name prop set to "one",
 "two" and "three" respectively. 
 Attach the same event handler to each button that prints the name prop to the console 
 when clicked by reading the event.target.name property. */

export function MultiButton() {
    function handleButtonClick(event){
        console.log(event.target.name)
    }

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>1</button>
      <button name="two" onClick={handleButtonClick}>2</button>
      <button name="three" onClick={handleButtonClick}>3</button>
    </div>
  );
}
