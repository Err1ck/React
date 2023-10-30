/* Create a LanguageContext and wrap a Clock component within its provider. Add a select tag to the component in which the Clock component is rendered that allows the user to select the language, and pass it as a value to the Provider. */

import { Clock } from "./Exercise70-Clock";
import { LanguageContextContainer } from "./Exercise70-LanguageContext";

export function App() {
  return (
    <LanguageContextContainer>
      <Clock />
    </LanguageContextContainer>
  );
}
