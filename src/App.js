import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Maindisplay from "./mainDisplay/Maindisplay";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Registration from "./registrationui/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/home" element={<Maindisplay />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
