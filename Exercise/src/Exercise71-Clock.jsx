/* Consume the LanguageContext within the Clock component by using the useContext hook, and show the "current time" message in the correct language. */
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "./Exercise71-LanguageContext";

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
