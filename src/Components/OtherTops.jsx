
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faDollarSign } from '@fortawesome/free-solid-svg-icons'

function OtherTops() {
  return (
   
        <form action="">
          <div className="shadow mx-8 mb-4 py-4 items-center flex grid-container">
            <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ml-64">
              <div>
                <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
              </div>
              <img src="src/Assets/images (7).jpeg" alt="" />
              <div className="icon-container flex flex-column items-center ml-10">
                <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
                <h1 className='mt-2 ml-6'>500.00</h1>
                <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
              </div>
            </div>
            <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg">
              <div>
                <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
                <button className='bg-blue-400 rounded-lg px-4'>sold</button>
              </div>
              <img src="src/Assets/images (6).jpeg" alt="" />
              <div className="icon-container flex flex-column items-center ml-10">
                <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
                <h1 className='mt-2 ml-6'>500.00</h1>
                <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
              </div>
            </div>
            <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg">
              <div>
                <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
                <button className='bg-blue-400 rounded-lg px-4'>New</button>
              </div>
              <img src="src/Assets/images (5).jpeg" alt="" />
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

export default OtherTops