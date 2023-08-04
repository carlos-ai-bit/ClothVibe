import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';

function ProductsView({price, image}) {
  return (
    
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg ml-64">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src={image} alt="" />
          <div className="icon-container flex flex-column items-center ml-10">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className='mt-2'>{price}</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
          </div>
        </div>
    
  )
}
ProductsView.propTypes={
    price:PropTypes.number,
    image:PropTypes.string
}
export default ProductsView