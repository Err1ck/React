import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Exercise82-Welcome";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name={"Erick"} age={26} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
