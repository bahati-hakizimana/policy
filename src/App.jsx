import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import VerifyPassword from "./components/auth/VerifyPassword.jsx";
import Otp from "./components/auth/Otp.jsx";
import Layout from "./components/admin/Layout.jsx";
import Home from './components/pages/Home.jsx';
import Users from './components/pages/Users.jsx';
import Pdf from './components/pages/Pdf.jsx';
import Excell from './components/pages/Excell.jsx';
import Private   from './components/pages/instutitions/Private.jsx';
import Public   from './components/pages/instutitions/Public.jsx';
import Departiments from "./components/pages/Departiments.jsx";
import Policies from "./components/pages/Policies.jsx";
import Instutitions from "./components/pages/Instutitions.jsx";
import Profil from "./components/pages/Profil.jsx";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/verifypassword" element={<VerifyPassword />} />
          <Route path="/otpverification" element={<Otp />} />

          <Route path="/admin"  element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/pdf"  element={<Pdf />} />
          <Route path="/admin/excel"  element={<Excell />} />
          <Route path="/admin/instutitions" element={<Instutitions />} />
          {/* <Route path="/admin/institution/private" element={<Private />} />
          <Route path="/admin/institution/public"  element={<Public />} /> */}
          <Route path="/admin/departiments"  element={<Departiments />} />
          <Route path="/admin/profile"  element={<Profil />} />
          <Route path="/admin/policies"  element={<Policies />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;