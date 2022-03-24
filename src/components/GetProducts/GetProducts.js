import React, { useEffect, useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
const GetProducts = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='products-container'>
            {products.map(product => <DisplayProducts product={product} key={product.id} CartItem={props.CartItem}></DisplayProducts>)}

        </div>
    );
};
export default GetProducts;