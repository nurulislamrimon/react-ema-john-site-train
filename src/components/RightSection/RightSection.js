import React from 'react';

const RightSection = props => {
    return (
        <div>
            <h1>Selected items: {(props.Cart.length)}</h1>
        </div>
    );
};

export default RightSection;