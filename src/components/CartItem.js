import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <div className="item-name-container">
                <i className={item.isVeg ? 'fa fa-leaf veg-icon' : 'fa fa-circle non-veg-icon'}></i>
                <span className="cart-item-name">{item.name}</span>
            </div>
            <span className="cart-item-price">₹{item.price}</span>
        </div>
    );
};

export default CartItem;
