import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Harsh from "./components/Harsh";
import Login from "./components/Login";
import Error from "./components/Error";
import { ToastContainer } from "react-toastify";
import Private from "./components/Private";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/home"
            element={
              <Private>
                <Home />
              </Private>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Private>
                <About />
              </Private>
            }
          ></Route>
          <Route
            path="/contact"
            element={
   
                <Contact />
             
            }
          ></Route>
          <Route
            path="/home/page/:id"
            element={
              <Private>
                <Harsh />
              </Private>
            }
          ></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
