import { useEffect, useState } from 'react';
import './App.css';
import GetProducts from './components/GetProducts/GetProducts';
import RightSection from './components/RightSection/RightSection';
import { addToDb, getProductFromDb } from "../src/utilities/fakedb";


function App() {
  // get data from fake db
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json').then(res => res.json()).then(data => setProducts(data))
  }, [])

  // cart item for dispalying
  const [cart, setCart] = useState([]);

  const CartItem = selectedProduct => {

    let newCart = [];

    const exist = cart.find(product => product.id === selectedProduct.id);

    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart([...cart, selectedProduct]);
    addToDb(selectedProduct.id)
  };
  useEffect(() => {
    const cartedProducts = getProductFromDb();
    const savedCart = [];
    for (const id in cartedProducts) {
      const addedProducts = products.find(product => product.id === id);
      if (addedProducts) {
        const quantity = cartedProducts[id];
        addedProducts.quantity = quantity;
        savedCart.push(addedProducts)
      }
      setCart(savedCart)
      console.log(savedCart);
    };
  }, [products])

  return (
    <div className='main-container'>
      <GetProducts CartItem={CartItem}></GetProducts>
      <RightSection Cart={cart}></RightSection>
    </div>
  );
}

export default App;
