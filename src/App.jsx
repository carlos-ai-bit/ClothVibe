import "./App.css";

import Footer from "./Components/Footer";
import Loginpage from "./Components/Loginpage";
import Signupage from "./Components/Signupage";
import AddCart from "./Components/AddCart";
import { Route, Routes } from "react-router-dom";
import Shoes from "./Components/Shoes";
import Sweaters from "./Components/Sweaters";
import Tops from "./Components/Tops";
import Bags from "./Components/Bags";
import HomePage from "./Components/HomePage";
import All from "./Components/All";
import UnderWear from "./Components/UnderWear";
function App() {
  return (
    <>
      <AddCart/> 
      { <Loginpage/>} 
       {<Signupage/>} 
   
      {<Footer />}
      <Routes>
         <Route exact path="/" element={<HomePage />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path="/sweaters" element={<Sweaters />} />
        <Route exact path="/shoes" element={<Shoes />} />
        <Route exact path="/tops" element={<Tops />} />
        <Route exact path="/bags" element={<Bags />} />
        <Route exact path="/UnderWear" element={<UnderWear />} />
      </Routes>
    </>
  );
}
export default App;
