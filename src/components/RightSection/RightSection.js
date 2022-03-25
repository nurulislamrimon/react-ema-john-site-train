import React from 'react';

const RightSection = ({ Cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const item of Cart) {
        quantity = item.quantity + quantity;
        total = total + item.price * quantity;
        shipping = shipping + item.shipping;
    }
    const tax = (total * 10 / 100).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='right-section'>
            <div className="carted-items">
                <h1>Cart:</h1>
                <h4>Selected items: {(quantity)}</h4>
                <h4>Total Price: ${(total)}</h4>
                <h4>Shipping Cost: ${(shipping)}</h4>
                <h4>Tax: ${(tax)}</h4>
                <h2>Grand total: ${(grandTotal)}</h2>
            </div>
        </div>
    );
};

export default RightSection;