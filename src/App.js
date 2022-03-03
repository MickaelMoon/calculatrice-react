import Calculatrice from "./Components/Calculatrice/Calculatrice";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Calculatrice React</h1>
      <Routes>
        <Route path="/" element={<Calculatrice />} />
      </Routes>
    </>
  );
}

export default App;
