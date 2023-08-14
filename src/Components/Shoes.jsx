import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart,faDollarSign  } from '@fortawesome/free-solid-svg-icons';

function Shoes() {
  return (
    <form action="">
        <div className="shadow mx-8 mb-4 py-4   items-center flex ">
            <div className="shadow mx-8 mb-4 py-4 w-56 h-80 rounded-lg  ml-64 " >
            <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
                <img src="public/Assets/Adiddas.jpg" alt="" />
                <div className="icon-container">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='flex items-center'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-48" />
            
          </div>
            </div>
            <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg h-80"  >
            <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
                <img src="public/Assets/Canvas.jpg" alt="" />
                <div className="icon-container">
          <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
          <h1 className='flex items-center'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-48" />
            
          </div>
            </div>
            <div className="shadow mx-8 mb-4 py-4 w-56 h-80 rounded-lg" >
            <div>
          <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
                <img src="public/Assets/highheeled.jpg" alt="" />
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

export default Shoes