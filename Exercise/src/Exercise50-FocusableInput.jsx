/* Create a FocusableInput component that renders an input tag. 
As soon as the component renders, the input tag should be focused automatically. */

import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  console.log(inputRef);
  return <input ref={inputRef} />;
}
