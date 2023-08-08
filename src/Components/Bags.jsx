import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function Bags() {
  return (
    <form action="">
      <div className="shadow mx-8 mb-4 py-4 flex items-center">
        <div className="shadow mx-8 mb-4 py-4 rounded-lg w-56 h-80 ml-64">
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          <img src="src/Assets/ybag.jpg" alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="mt-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 rounded-lg w-56 h-80">
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          <img src="src/Assets/images (1).jpeg" alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="mt-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 rounded-lg w-56 h-80">
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          <img src="src/Assets/replace bag.jpeg" alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="mt-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Bags;
