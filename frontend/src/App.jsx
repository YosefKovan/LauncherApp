import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AddLAuncher from "./pages/AddLauncherPage/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage/LauncherDetailsPage"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<AddLAuncher />} />
        <Route path="/launcher/:id" element={<LauncherDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
  AddLAuncher
}

export default App;
