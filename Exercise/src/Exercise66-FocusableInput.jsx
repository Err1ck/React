import { InputGroup, FormControl } from "react-bootstrap";
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
  return (
    <div>
      <input ref={inputRef} />;
      <InputGroup>
        <FormControl ref={inputRef} />
      </InputGroup>
    </div>
  );
}
