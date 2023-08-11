import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, } from '@fortawesome/free-solid-svg-icons';
import { products } from './ProductsData';
import { PropTypes } from 'prop-types';

function Products({category}) {
    const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);

  return (
    <>
    {filteredProducts.map((product) => (
        <div className="shadow mb-4 py-4 w-56 mx-5 rounded-lg" key={product.id}>
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <div className='w-48 h-64'>
          <img src={product.imageSrc} alt="" />
          </div>
          <div className="icon-container flex flex-column items-center justify-between w-full px-4">
            {/* <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" /> */}
            <h1 className='mt-2'>{product.price}</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon " />
          </div>
        </div>
  )
    )
}
</>
  )
}
Products.propTypes={
    category:PropTypes.string,
   
}
export default Products