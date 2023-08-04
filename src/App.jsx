import "./App.css";
import Navbar from "./Components/Navbar";
import Shoes from "./Components/Shoes";
import Sweaters from "./Components/Sweaters";
import Tops from "./Components/Tops";
import Bags from "./Components/Bags";
import Cartview from "./Component/Cartview";
function App() {
  return (
    <>
      <Navbar />
      <Sweaters/>
      <Shoes/>
      <Tops/>
      <Bags/>
      <Cartview/>
    </>
  );
}
export default App;
