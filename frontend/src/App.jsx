import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AddLAuncher from "./pages/AddLauncherPage/AddLauncherPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-launcher" element={<AddLAuncher />} />
      </Routes>
    </BrowserRouter>
  );
  AddLAuncher
}

export default App;
