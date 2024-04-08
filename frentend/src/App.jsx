import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Connecter from "./components/Connecter";
import Inscrire from "./components/Inscrire";

import Profile from "./components/Profile";
import Adduser from "./pages/Adduser";
import ShowUsers from "./pages/ShowUsers";
import Edituser from "./pages/Edituser";
import Deleteuser from "./pages/Deleteuser";
import Admin from "./components/Admin";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="inscrire" element={<Inscrire />} />
          <Route path="seconnecter" element={<Connecter />} />

          <Route path="Admin" element={<Admin />} /> 
          <Route path="/Admin/create" element={<Adduser />} />
          <Route path="/Admin/details/:id" element={<ShowUsers />} />
          <Route path="Admin/edit/:id" element={<Edituser />} />
          <Route path="Admin/delete/:id" element={<Deleteuser />} />
          <Route></Route>
          <Route></Route>
          <Route path="Profile/:id" element={<Profile />} />
        </Routes>
                
      </BrowserRouter>
    </div>
  );
};

export default App;
