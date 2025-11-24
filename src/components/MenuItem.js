import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, addToCart }) => {
    return (
        <div className="menu-item">
            <div className="item-info">
                <i className={item.isVeg ? 'fa fa-leaf veg-icon' : 'fa fa-circle non-veg-icon'}></i>
                <div className="item-details">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-price">₹{item.price}</p>
                </div>
            </div>
            <div className="add-button-container">
                <button className="add-button" onClick={() => addToCart(item)}>
                    ADD
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
