import Loginpage from "./Components/Loginpage";
import Signupage from "./Components/Signupage";
import AddCart from "./Components/AddCart";
/* eslint-disable no-unused-vars */
import "./App.css";
// import "react-tabs/style/react-tabs.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Components/All";
import Sweaters from "./Components/Sweaters";
import Tops from "./Components/Tops";
import Shoes from "./Components/Shoes";
import UnderWear from "./Components/UnderWear";
import Bags from "./Components/Bags";
import OtherSweaters from "./Components/OtherSweaters";
import OtherUnder from "./Components/OtherUnder";
import OtherTops from "./Components/OtherTops";
import OtherShoes from "./Components/OtherShoes";
import OtherBags from "./Components/Bags";
import Footer from "./Components/Footer";
import Loginpage from "./Components/Loginpage";
import Signupage from "./Components/Signupage";
import AddCart from "./Components/AddCart";
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

import Cartview from "./Components/Cartview";
import Payment from "./Components/Payment";
import ProjectsDescription from "./Components/ProjectsDescription";
// import ImageList from "./Components/ClothesData";
function App() {
  return (
    <>
      {/* <AddCart/>  */}
      {/* <ImageList/> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />{" "}
        <Route exact path="/Loginpage" element={<Loginpage />} />
        <Route exact path="/Signupage" element={<Signupage />} />
        {/* <Route exact path="/AddCart" element={<AddCart />} /> */}
        {/* <Route exact path="/Footer" element={<Footer />} /> */}
        <Route exact path="/" element={<HomePage />} />{" "}
        <Route exact path="/Loginpage" element={<Loginpage />} />
        <Route exact path="/Signupage" element={<Signupage />} />
        <Route exact path="/Footer" element={<Footer />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path="/sweaters" element={<Sweaters />} />
        <Route exact path="/shoes" element={<Shoes />} />
        <Route exact path="/tops" element={<Tops />} />
        <Route exact path="/bags" element={<Bags />} />
        <Route exact path="/UnderWear" element={<UnderWear />} />
        <Route exact path="/AddCart" element={<AddCart />} />
        <Route exact path="/Signupage" element={<Signupage />} />
        <Route exact path="/Loginpage" element={<Loginpage />} />
        <Route exact path="/Cartview" element={<Cartview />} />
        <Route
          exact
          path="/projectsDescription"
          element={<ProjectsDescription />}
        />
        <Route path="/bags" element={<Bags />} />
        <Route path="/otherSweaters" element={<OtherSweaters />} />
        <Route path="/otherUnder" element={<OtherUnder />} />
        <Route path="/otherTops" element={<OtherTops />} />
        <Route path="/otherShoes" element={<OtherShoes />} />
        <Route path="/otherBags" element={<OtherBags />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
