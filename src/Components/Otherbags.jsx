
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Otherbags() {
  return (
    <form action="">
    <div className="shadow mx-8 mb-4 py-4 flex items-center grid-container">
      <div className="shadow mx-8 mb-4 py-4 rounded-lg w-56 h-80 ml-64">
        <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
        <img src="src/Assets/images (17).jpeg" alt="" />
        <div className="icon-container flex flex-column items-center ml-10">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='mt-2 ml-6'>500.00</h1>
          <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
        </div>
      </div>
      <div className="shadow mx-8 mb-4 py-4 rounded-lg w-56 h-80">
      <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
      <button className='bg-blue-400 px-4 rounded-lg'>Sold</button>
        <img src="src/Assets/images (18).jpeg" alt="" />
        <div className="icon-container flex flex-column items-center ml-10">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='mt-2 ml-6'>500.00</h1>
          <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
        </div>
      </div>
      <div className="shadow mx-8 mb-4 py-4 rounded-lg w-56 h-80">
      <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
      <button className='bg-blue-400 rounded-lg px-4'>New</button>
        <img src="src/Assets/images (19).jpeg" alt="" />
        <div className="icon-container flex flex-column items-center ml-10">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='mt-2 ml-6'>500.00</h1>
          <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
        </div>
      </div>
    </div>
  </form> 
  )
}

export default Otherbags