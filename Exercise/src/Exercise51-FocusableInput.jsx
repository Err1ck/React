/* Using StrictMode, create a component with an effect that prints a message only when the component is mounted the first time. Use a ref to keep track of whether the component is mounted or not. */

import { useEffect, useRef } from "react";

export function FocusableInput() {
  const mountedRef = useRef(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    }
    inputRef.current?.focus();
  }, []);
  console.log(inputRef);
  return <input ref={inputRef} />;
}
