import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function Tops() {
  return (
    <form action="">
      <div className="shadow mx-8 mb-4 py-4 items-center flex">
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ml-64">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/images rep.jpeg" alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="mt-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/ptop.jpeg" alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="mt-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/18149619_0_ladies-tops.webp" alt="" />
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

export default Tops;
