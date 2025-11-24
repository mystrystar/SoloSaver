import React from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../data';
import MenuItem from '../components/MenuItem';
import './RestaurantPage.css';

const RestaurantPage = ({ addToCart }) => {
    const { id } = useParams();
    const restaurant = restaurants.find(r => r.id === parseInt(id));

    if (!restaurant) {
        return <div className="error-page">Restaurant not found!</div>;
    }

    return (
        <div className="restaurant-page">
            <div className="page-container">
                <div className="restaurant-header-card">
                    <div className="restaurant-titles">
                        <h2 className="restaurant-name-title">{restaurant.name}</h2>
                        <p className="restaurant-cuisine-subtitle">{restaurant.cuisine}</p>
                    </div>
                    <div className="restaurant-rating-box">
                        <span className="rating-value">{restaurant.rating} ★</span>
                    </div>
                </div>

                <div className="menu-container">
                    <h3 className="menu-title">Menu</h3>
                    <div className="menu-list">
                        {restaurant.menu.map(item => (
                            <MenuItem key={item.id} item={item} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantPage;

