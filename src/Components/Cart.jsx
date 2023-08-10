
import PropTypes from 'prop-types'; 

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cart;
