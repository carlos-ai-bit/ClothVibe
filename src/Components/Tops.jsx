import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart,faDollarSign  } from '@fortawesome/free-solid-svg-icons';


function Tops() {
  return (
    <form action="">
        <div className="shadow mx-8 mb-4 py-4 flex items-center">
            <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg h-84 ml-64 ">
            <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
                <img src="public/Assets/tshirt.jpg" alt="" />
                <div className="icon-container">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='flex items-center'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-48" />
            
          </div>
            </div>
            <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg h-84 ">
            <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
                <img src="public/Assets/ptop.jpeg" alt="" />
                <div className="icon-container">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='flex items-center'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-48" />
            
          </div>
            </div>
            <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg h-80 ">
            <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
            <img src="public/Assets/18149619_0_ladies-tops.webp" alt="" />
            <div className="icon-container">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='flex items-center'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-48" />
            
          </div>
            </div>
        
        </div>
    </form>
   
  )
}

export default Tops