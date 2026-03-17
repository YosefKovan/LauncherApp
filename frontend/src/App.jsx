import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AddLAuncher from "./pages/AddLauncherPage/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage/LauncherDetailsPage"
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UserPage from "./pages/ViewUsersPage/UserPage"
import EditUserPage from "./pages/EditUserPage/EditUserPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoute roles={["ADMIN"]}/>}>
          <Route path="/register-user" element={<RegisterPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/edit/:id" element={<EditUserPage />} />
        </Route>
       
        
        <Route element={<ProtectedRoute roles={["ADMIN", "INTELLIGENCE", "AIRFORCE"]}/>}>
          <Route path="/launchers" element={<HomePage />} />
          <Route path="/launcher/:id" element={<LauncherDetailsPage />} />
        </Route>

        <Route element={<ProtectedRoute roles={["ADMIN", "INTELLIGENCE"]}/>}> 
            <Route path="/create-launcher" element={<AddLAuncher />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
