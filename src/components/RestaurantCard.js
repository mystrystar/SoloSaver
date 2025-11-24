import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="restaurant-card">
            <Link to={`/restaurant/${restaurant.id}`}>
                <div className="card-image-container">
                    <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                </div>
                <div className="restaurant-info">
                    <div className="restaurant-header">
                        <h3 className="restaurant-name">{restaurant.name}</h3>
                        <div className="restaurant-rating">
                            <span>{restaurant.rating} ★</span>
                        </div>
                    </div>
                    <div className="restaurant-details">
                        <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                        <p className="restaurant-price">{restaurant.priceForTwo}</p>
                    </div>
                     <div className="restaurant-delivery-time">
                        <span>{restaurant.deliveryTime}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RestaurantCard;
