import React from 'react';
import { restaurants } from '../data';
import RestaurantCard from '../components/RestaurantCard';
import './HomePage.css';

const HomePage = ({ nearbyMatch, onJoinMatch, onSimulateNearbyMatch }) => {
    return (
        <div className="home-page">
            <div className="page-container">
                {!nearbyMatch && (
                    <div className="simulate-match-container">
                        <button className="simulate-match-btn" onClick={onSimulateNearbyMatch}>
                            Simulate Nearby Match (for User B)
                        </button>
                    </div>
                )}
                {nearbyMatch && (
                    <div className="nearby-match-banner">
                        <div className="banner-content">
                            <span className="fire-icon">🔥</span>
                            <p className="banner-text">Someone near you is ordering from <span className="restaurant-highlight">Dragonfly</span>. Join and get FREE delivery.</p>
                        </div>
                        <button className="join-order-btn" onClick={onJoinMatch}>Join Order</button>
                    </div>
                )}
                <h2 className="page-title">Restaurants Near You</h2>
                <div className="restaurant-list">
                    {restaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
