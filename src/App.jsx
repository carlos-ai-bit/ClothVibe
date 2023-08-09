import "./App.css";
// import Footer from "./Components/Footer";
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
import Cartview from "./Components/Cartview";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />{" "}
        <Route exact path="/Loginpage" element={<Loginpage />} />
        <Route exact path="/Signupage" element={<Signupage />} />
        <Route exact path="/AddCart" element={<AddCart />} />
        {/* <Route exact path="/Footer" element={<Footer />} /> */}
        <Route exact path="/all" element={<All />} />
        <Route exact path="/sweaters" element={<Sweaters />} />
        <Route exact path="/shoes" element={<Shoes />} />
        <Route exact path="/tops" element={<Tops />} />
        <Route exact path="/bags" element={<Bags />} />
        <Route exact path="/UnderWear" element={<UnderWear />} />
        <Route exact path="/Cartview" element={<Cartview />} />
      </Routes>
    </>
  );
}
export default App;
