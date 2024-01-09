
import React  from 'react';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { addItem, updateItemAmount } from './features/cartSlice';

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);

    if (isPresent) {
      console.log('warning')
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    dispatch(addItem(item));
  };

  const handleChange = (item, d) => {
    if (item.amount === 1 && d === -1) {
      return;
    }
    dispatch(updateItemAmount({ id: item.id, amount: d }));
  };

  return (
    <Router>
      <div>
        <Navbar size={cart.length}  />
        <Routes>
          <Route path="/" element={<Shop handleClick={handleClick} />} />
          <Route path="/cart" element={<Cart cart={cart} total={total} handleChange={handleChange} />} />
        </Routes>
        {warning && <div className='warning'> Item is already in your cart </div>}
      </div>
    </Router>
  );
};

export default App;



