/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faDollarSign } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
=======
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

>>>>>>> c4420a8 (installs Prop types and adds a cartview page)
function Shoes() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <form action="">
      <div className="shadow mx-8 mb-4 py-4 items-center flex">
       
        <div className="shadow mx-8 mb-4 py-4 w-56 h-80 rounded-lg ml-64">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
            <button className="bg-blue-400 rounded-lg px-4">New </button>
          </div>
          <img src="src/Assets/Adiddas.jpg" alt="" />
          <div className="icon-container flex flex-row items-end justify-center mt-4">
<<<<<<< HEAD
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className=' ml-6'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
           <h1 className="ml-2 mr-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
=======
            <FontAwesomeIcon
              icon={faDollarSign}
              className="Dollar-icon"
            />
            <h1 className="ml-6">500.00</h1>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="Cart-icon ml-6"
              onClick={() => addToCart('Adidas')}
            />
>>>>>>> c4420a8 (installs Prop types and adds a cartview page)
          </div>
        </div>
      
        <div className="shadow mx-8 mb-4 py-4 w-56 rounded-lg h-80">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
          </div>
          <img src="src/Assets/Canvas.jpg" alt="" />
          <div className="icon-container flex flex-row items-end justify-center mt-4">
<<<<<<< HEAD
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className='ml-6 '>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
            <h1 className="ml-2 mr-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
=======
            <FontAwesomeIcon
              icon={faDollarSign}
              className="Dollar-icon"
            />
            <h1 className="ml-6">500.00</h1>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="Cart-icon ml-6"
              onClick={() => addToCart('Canvas')}
            />
>>>>>>> c4420a8 (installs Prop types and adds a cartview page)
          </div>
        </div>
        <div className="shadow mx-8 mb-4 py-4 w-56 h-80 rounded-lg">
          <div>
            <FontAwesomeIcon icon={faHeart} className="Like-icon ml-48" />
            <button className="bg-blue-400 rounded-lg px-4">Sold</button>
          </div>
          <img src="src/Assets/casual.webp" alt="" />
          <div className="icon-container flex flex-row items-end justify-center mt-4">
<<<<<<< HEAD
            <FontAwesomeIcon icon={faDollarSign} className="Dollar-icon" />
            <h1 className='ml-6'>500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon ml-6" />
            <h1 className="ml-2 mr-2">500.00</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="Cart-icon" />
=======
            <FontAwesomeIcon
              icon={faDollarSign}
              className="Dollar-icon"
            />
            <h1 className="ml-6">500.00</h1>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="Cart-icon ml-6"
              onClick={() => addToCart('Casual')}
            />
>>>>>>> c4420a8 (installs Prop types and adds a cartview page)
          </div>
        </div>
        <div className="pagination">
          <Link to="/othershoes" className="next-button">
            Next <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Shoes;
