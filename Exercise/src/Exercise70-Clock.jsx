/* Create a LanguageContext and wrap a Clock component within its provider. Add a select tag to the component in which the Clock component is rendered that allows the user to select the language, and pass it as a value to the Provider. */

import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "./Exercise70-LanguageContext";

export function Clock() {
  const [time, setTime] = useState(new Date());
  const language = useContext(LanguageContext);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <h2>
      {language === "en" ? "Current:" : "Actual:"} {time.toLocaleTimeString()}
    </h2>
  );
}
