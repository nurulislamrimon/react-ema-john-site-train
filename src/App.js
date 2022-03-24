import { useState } from 'react';
import './App.css';
import GetProducts from './components/GetProducts/GetProducts';
import RightSection from './components/RightSection/RightSection';


function App() {
  const [cart, setCart] = useState([]);

  const CartItem = product => {
    setCart([...cart, product])
  };

  return (
    <div className='main-container'>
      <GetProducts CartItem={CartItem}></GetProducts>
      <RightSection Cart={cart}></RightSection>
    </div>
  );
}

export default App;
