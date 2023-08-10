import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
=======
>>>>>>> c4420a8 (installs Prop types and adds a cartview page)
function Sweaters() {
  return (
    <form action="">
      <div className="shadow mx-8 mb-4 py-4 items-center flex">
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ml-64">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
            <button className="bg-blue-400 rounded-lg px-4">sold</button>
          </div>
          <img src="src/Assets/images (4).jpeg" alt="Sweater" />
          <div className="icon-container flex items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="ml-2 mr-4">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/61Q3vAe5LuL._AC_UY1100_.jpg" alt="Sweater" />
          <div className="icon-container flex items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="ml-2 mr-4">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
            <button className="bg-blue-400 rounded-lg px-4">New</button>
          </div>
          <img src="src/Assets/505183_1155_41.jpeg" alt="Sweater" />
          <div className="icon-container flex items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className="ml-2 mr-4">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
        <div className="pagination">
          <Link to="/othersweaters" className="next-button">
            Next <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Sweaters;
