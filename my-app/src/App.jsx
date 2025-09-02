import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import CardComponent from "./components/CardComponent";
import CardThanks from "./components/CardThanks/CardThanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardComponent />} />
        <Route path="/thankyou" element={<CardThanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
