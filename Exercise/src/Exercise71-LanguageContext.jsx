/* Consume the LanguageContext within the Clock component by using the useContext hook, and show the "current time" message in the correct language. */
import { createContext, useState } from "react";

export const LanguageContext = createContext("en");

export function LanguageContextContainer({ children }) {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }
  return (
    <LanguageContext.Provider value={language}>
      <h1>Aplicación Reloj</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">Inglés</option>
        <option value="es">Español</option>
      </select>
      {children}
    </LanguageContext.Provider>
  );
}
