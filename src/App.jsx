import "./App.css";

import { Route, Routes } from "react-router-dom";

import Shoes from "./Components/Shoes";
import Sweaters from "./Components/Sweaters";
import Tops from "./Components/Tops";
import Bags from "./Components/Bags";

import All from "./Components/All";
import UnderWear from "./Components/UnderWear";
function App() {
  return (
    
      <>
        <Navbar />
        <Routes>
          <Route exact path="/all" element={<All/> }/>
          <Route exact path="/sweaters" element={<Sweaters/>} />
          <Route exact path="/shoes" element={<Shoes/>} />
          <Route exact path="/tops" element={<Tops/>} />
          <Route exact path="/bags" element={<Bags/>} />
          <Route exact path="/UnderWear" element={<UnderWear/>} />
          </Routes>
      </>

  );
}
export default App;
