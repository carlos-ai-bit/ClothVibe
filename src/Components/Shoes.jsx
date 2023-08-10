import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Shoes() {
  return (
    <form action="">
      <div className="shadow mx-8 mb-4 py-4 items-center flex">
        <div className="shadow mx-8 mb-4 py-4 w-56 h-80 rounded-lg ml-64">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
            <button className="bg-blue-400 rounded-lg px-4">New </button>
          </div>
          <img src="src/Assets/Adiddas.jpg" alt="" />
          <div className="icon-container flex flex-row items-end justify-center mt-4">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className=" ml-6">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
            <h1 className="ml-2 mr-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg h-80">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/Canvas.jpg" alt="" />
          <div className="icon-container flex flex-row items-end justify-center mt-4">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="ml-6 ">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
            <h1 className="ml-2 mr-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 h-80 rounded-lg">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
            <button className="bg-blue-400 rounded-lg px-4">Sold</button>
          </div>
          <img src="src/Assets/casual.webp" alt="" />
          <div className="icon-container flex flex-row items-end justify-center mt-4">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="ml-6">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
            <h1 className="ml-2 mr-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="pagination">
          <Link to="/othershoes" className="next-button">
            Next <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Shoes;
