
import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/cart.css';
import { removeItem } from '../features/cartSlice';

const Cart = ({ cart, total, handleChange }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <article>
      {cart?.map((item) => (
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <img src={item.img} alt='' />
            <p>{item.title}</p>
          </div>
          <div>
            <p style={{fontWeight:500}}>Quantity : {item.amount}</p>
          </div>
          <div>
            <button className='plus' onClick={() => handleChange(item, 1)}>+</button>
            <button className='plus' onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>Rs : {item.price}</span>{}
            <button className='Remove' onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price of your Cart</span>
        <span> Rs - {total}</span>
      </div>
    </article>
  );
};

export default Cart;





