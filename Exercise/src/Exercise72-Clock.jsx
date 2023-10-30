/* Remove the Context Provider. What happens to the Clock component? Why? */
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "./Exercise72-LanguageContext";

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
