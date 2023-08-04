import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Sweaters() {
  return (
    <form action="">
      <div className="shadow mx-8 mb-4 py-4 items-center flex">
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ml-64">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/images (4).jpeg" alt="Sweater" />
          <div className="icon-container flex items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className='ml-2 mr-4'>500.00</h1>
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
            <h1 className='ml-2 mr-4'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>

        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/505183_1155_41.jpeg" alt="Sweater" />
          <div className="icon-container flex items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className='ml-2 mr-4'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
      </div>
    </form>
  )
}

export default Sweaters;
