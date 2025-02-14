import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Main from "./components/Main";
import Sign from "./components/Sign";
import LogIn from "./components/LogIn";
import About from "./components/About";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword.jsx";
import NewPassword from "./components/NewPassword.jsx";
import SecurityCodePage from "./components/SecurityCodePage.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // تحقق مما إذا كان المستخدم مسجل دخول
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  return (
    <Router>
      {/* إخفاء الـ Navbar في صفحات الاستعادة */}
      {!["/forgotpassword", "/recover/code", "/recover/password"].includes(window.location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Sign />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/recover/code" element={<SecurityCodePage />} />
        <Route path="/recover/password" element={<NewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
