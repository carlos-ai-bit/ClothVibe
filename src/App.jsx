import Loginpage from "./Components/Loginpage";
import Signupage from "./Components/Signupage";
import AddCart from "./Components/AddCart";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shoes from "./Components/Shoes";
import Sweaters from "./Components/Sweaters";
import Tops from "./Components/Tops";
import Bags from "./Components/Bags";
import HomePage from "./Components/HomePage";
import All from "./Components/All";
import UnderWear from "./Components/UnderWear";
//import SlideOver from "./Components/SlideOver";

function App() {
  return (
    <>
       
       <Loginpage/> 
       <Signupage/> 
        {/*<AddCart/>*/}
      <Routes>

        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path="/sweaters" element={<Sweaters />} />
        <Route exact path="/shoes" element={<Shoes />} />
        <Route exact path="/tops" element={<Tops />} />
        <Route exact path="/bags" element={<Bags />} />
        <Route exact path="/UnderWear" element={<UnderWear />} />
        <Route exact path="/AddCart" element={<AddCart />} />
        <Route exact path="/Signupage" element={<Signupage />} />
        <Route exact path="/Loginpage" element={<Loginpage />} />
      </Routes>
    </>
  );
}
export default App;
