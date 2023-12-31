import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
function UnderWear() {
  return (
    <form action="">
      <div className="shadow mx-8 mb-4 py-4 items-center flex">
        <div className="shadow mx-8 mb-4 py-4 w-56 h-80 rounded-lg ml-64">
          <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
            <button className='rounded-lg bg-blue-400 px-4'>New</button>
          </div>
          
          <img src="src/Assets/innerblue.jpeg" alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className='mt-2 ml-6'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg h-80">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/buts.jpeg" alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className='mt-2 ml-6'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 h-80 rounded-lg">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
            <button className='bg-blue-400 rounded-lg px-4'>Sold</button>
          </div>
          <img src="src/Assets/red inner.webp" alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className='mt-2 ml-6'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
          </div>
        </div>
        <div className="pagination">
          <Link to="/otherunder" className="next-button">
            Next <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>
        </div>
      </div>
    </form>
  )
}

export default UnderWear;
