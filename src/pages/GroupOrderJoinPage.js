import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { restaurants } from '../data';
import './GroupOrderJoinPage.css';

const GroupOrderJoinPage = () => {
    const { orderId } = useParams();
    // For demonstration, we'll let the user order from the first restaurant
    const restaurant = restaurants[0]; 

    const handleAddItem = (item) => {
        alert(`${item.name} has been added to the group order! (This is a demo)`);
    };

    return (
        <div className="group-order-join-page">
            <h2>Joining Group Order #{orderId}</h2>
            <p>You're ordering from <strong>{restaurant.name}</strong>.</p>
            <p>Add your items to the order below.</p>
            
            <div className="join-menu">
                {restaurant.menu.map(item => (
                    <div key={item.id} className="join-menu-item">
                        <span>{item.name} - ₹{item.price}</span>
                        <button onClick={() => handleAddItem(item)}>Add</button>
                    </div>
                ))}
            </div>

            <div className="join-actions">
                <Link to="/summary" className="view-cart-link">View Group Cart</Link>
            </div>
        </div>
    );
};

export default GroupOrderJoinPage;
