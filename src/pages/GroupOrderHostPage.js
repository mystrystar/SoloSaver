import React from 'react';
import { useParams } from 'react-router-dom';
import './GroupOrderHostPage.css';

const GroupOrderHostPage = () => {
    const { orderId } = useParams();
    const joinLink = `${window.location.origin}/join/${orderId}`;

    return (
        <div className="group-order-host-page">
            <h2>Group Order</h2>
            <p>Share this link with your friends to add their orders:</p>
            <div className="share-link-container">
                <input type="text" value={joinLink} readOnly />
                <button onClick={() => navigator.clipboard.writeText(joinLink)}>Copy</button>
            </div>

            <div className="order-status">
                <h3>Your Order</h3>
                {/* Items from the host's cart would be listed here */}
                <div className="host-items">
                    <p>Your items will appear here.</p>
                </div>
            </div>

            <div className="participants">
                <h3>Participants (1)</h3>
                <ul>
                    <li>You</li>
                    {/* Other participants would be listed here */}
                </ul>
            </div>

            <div className="group-order-actions">
                <button className="lock-order-btn">Lock & Proceed to Payment</button>
            </div>
        </div>
    );
};

export default GroupOrderHostPage;
