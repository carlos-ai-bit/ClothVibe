import "./App.css";

import { Route, Routes } from "react-router-dom";

import Shoes from "./Components/Shoes";
import Sweaters from "./Components/Sweaters";
import Tops from "./Components/Tops";
import Bags from "./Components/Bags";
import Navbar from "./Components/Navbar"
import All from "./Components/All";
import UnderWear from "./Components/UnderWear";
import OtherSweaters from "./Components/OtherSweaters";
import OtherShoes from "./Components/OtherShoes";
import OtherTops from "./Components/OtherTops";
import OtherUnder from "./Components/OtherUnder";
import Otherbags from './Components/Otherbags'
function App() {
  return (
    
      <>
      <Navbar/>
        <Routes>
          <Route exact path="/all" element={<All/> }/>
          <Route exact path="/sweaters" element={<Sweaters/>} />
          <Route exact path="/shoes" element={<Shoes/>} />
          <Route exact path="/tops" element={<Tops/>} />
          <Route exact path="/bags" element={<Bags/>} />
          <Route exact path="/UnderWear" element={<UnderWear/>} />
         <Route exact path="/othersweaters" element={<OtherSweaters/>}/>
         <Route exact path="/othershoes" element={<OtherShoes/>}/>
         <Route exact path="/othertops" element={<OtherTops/>}/>
         <Route exact path="/otherunder" element={<OtherUnder/>}/>
         <Route exact path="/otherbags" element={<Otherbags/>}/>
        </Routes> 
      </>

  );
}
export default App;
