import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const DisplayProducts = (props) => {
    const { name, id, img, price, seller, ratings, stock } = props.product;
    return (
        <div className="product-container">
            <div className='product'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p><small>Price: ${price}</small></p>
            </div>
            <button onClick={() => props.CartItem(props.product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default DisplayProducts;