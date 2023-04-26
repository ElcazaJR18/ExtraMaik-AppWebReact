import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import GlobalNavbar from "./components/GlobalNavbar";
import PuntoNum1 from "./components/PuntoNum1";
import PuntoNum2 from "./components/PuntoNum2";
import PuntoNum3 from "./components/PuntoNum3";
import PuntoNum4 from "./components/PuntoNum4";
import PuntoNum5 from "./components/PuntoNum5";
import Puntos6al10 from "./components/Puntos6al10";

function App() {
  return (
      <BrowserRouter>
          <GlobalNavbar/>
          <Routes>
              <Route exact path={"/"} element={<Home/>}/>
              <Route path={"/punto1"} element={<PuntoNum1/>}/>
              <Route path={"/punto2"} element={<PuntoNum2/>}/>
              <Route path={"/punto3"} element={<PuntoNum3/>}/>
              <Route path={"/punto4"} element={<PuntoNum4/>}/>
              <Route path={"/punto5"} element={<PuntoNum5/>}/>
              <Route path={"/puntos6-10"} element={<Puntos6al10/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
