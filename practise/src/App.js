import { BrowserRouter, Routes, Route } from "react-router-dom";
import Public from "./Components/Public";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import About from "./Components/About"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Public />} />
        <Route
          path="/private"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
         <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
