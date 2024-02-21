import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Pages/Header";
import Blast from "./Components/Blast";
import Footer from "./Components/Pages/Footer";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Cookies from "js-cookie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {Cookies.get("token") ? (
          ""
        ) : (
          <>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </>
        )}

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
