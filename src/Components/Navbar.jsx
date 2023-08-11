/* eslint-disable no-unused-vars */
import { useState } from "react";

import Products from "./Products";
function Navbar() {
  const [toggleState, setToggleState] = useState("all");

  return (
    <div className="">
      <div className="">
      <div className="Container bg-white shadow mx-2 mb-2 mt-8 py-2 rounded-lg  flex items-center justify-around fle-wrap">

        <div
          className={toggleState === "all" ? "border border-blue-600" : "tabs"}
          onClick={() => setToggleState("all")}
        >
          All
        </div>
        <div className={toggleState === "sweaters" ? "border border-blue-600 " : "tabs"} onClick={() => setToggleState("sweaters")}>
          Sweaters
        </div>
        <div className={toggleState === "shoes" ? "border border-blue-600" : "tabs"}  onClick={() => setToggleState("shoes")}>
          Shoes
        </div>
        <div className={toggleState === "tops" ? "border border-blue-600" : "tabs"}  onClick={() => setToggleState("tops")}>
          Tops
        </div>
        
        <div
          className={toggleState === "underwear" ? "border border-blue-600" : "tabs"}
          onClick={() => setToggleState("underwear")}
        >
          UnderWears
        </div>
        <div
          className={toggleState === "bag" ? "border border-blue-600" : "tabs"}
          onClick={() => setToggleState("bag")}
        >
          Bags
        </div>
        </div>
        {/* displayed content */}

        <div className="content-tabs">
          <div
            className={
              toggleState === "all" ? "flex flex-wrap justify-center items-center" : "hidden"
            }
          >
         
            <Products category="all"/>
          </div>
          <div
            className={
              toggleState === "sweaters" ? "flex flex-wrap justify-center items-center" : "hidden"
            }
          >
            <Products category="sweater"/>

          </div>
          <div
            className={
              toggleState === "shoes" ? "flex flex-wrap justify-center items-center" : "hidden"
            }
          >
            <Products category="shoes"/>
          </div>
          <div
            className={
              toggleState === "tops" ? "flex flex-wrap justify-center items-center" : "hidden"
            }
          >
             <Products category="tops"/>
          </div>
          <div
            className={
              toggleState === "underwear"? "flex flex-wrap justify-center items-center":"hidden"
            }>
            <Products category="underwear"/>
          </div>
          <div
            className={
              toggleState === "bag" ? "flex flex-wrap justify-center items-center" : "hidden"
            }
          >
            <Products category="bag"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
