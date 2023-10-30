/* Remove the Context Provider. What happens to the Clock component? Why? */
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
