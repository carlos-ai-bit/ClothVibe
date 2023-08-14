import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart,faDollarSign  } from '@fortawesome/free-solid-svg-icons';

function Sweaters() {
  return (
    <form action="">
      <div className="shadow mx-8 mb-4 py-4 items-center flex">
        <div className="shadow mx-8 mb-4 py-4 w-56  rounded-lg ml-64">
          <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="public/Assets/Sweater.jpg" alt="Sweater" />
          <div className="icon-container">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='flex items-center'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-48" />
            
          </div>
        </div>

        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ">
          <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="public/Assets/Coolsweater.jpg" alt="Sweater" />
          <div className="icon-container">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-48" />
          </div>
        </div>

        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ">
          <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="public/Assets/Sweater2.jpg" alt="Sweater" />
          <div className="icon-container">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-48" />
            
          </div>
        </div>
      </div>
    </form>
  )
}

export default Sweaters;