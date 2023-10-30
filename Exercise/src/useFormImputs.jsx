/* Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input. */
import { useState } from "react";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => setValue(e.target.value);

  return {
    value,
    onChange: handleChange,
  };
}
