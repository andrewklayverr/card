import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
