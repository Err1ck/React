/* Consume the LanguageContext within the Clock component by using the useContext hook, and show the "current time" message in the correct language. */

import { Clock } from "./Exercise71-Clock";
import { LanguageContextContainer } from "./Exercise71-LanguageContext";

export function App() {
  return (
    <LanguageContextContainer>
      <Clock />
    </LanguageContextContainer>
  );
}
