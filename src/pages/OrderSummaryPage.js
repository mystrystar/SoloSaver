import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './OrderSummaryPage.css';
import MatchingTimerModal from '../components/MatchingTimerModal'; 

const OrderSummaryPage = ({ 
    cart, 
    onStartMatching, 
    showMatchingModal, 
    modalState, 
    onCloseMatchingModal, 
    onConfirmOrder,
    onExtendMatch,
    setModalState, // Added to simulate state changes easily from UI
    isMatched // New prop to indicate if a match has been found
}) => {
    const itemTotal = cart.reduce((total, item) => total + item.price, 0);
    const deliveryFee = isMatched ? 0 : 200; // Delivery fee is ₹0 if matched
    const groupOrderSavings = isMatched ? 200 : 0;
    const grandTotal = itemTotal + deliveryFee;

    // Simulate Match Found / No Match / Host Left events for User A
    const handleSimulateMatch = (state) => {
        setModalState(state);
    };

    return (
        <div className="order-summary-page">
            <div className="page-container">
                {cart.length === 0 ? (
                    <div className="empty-cart-container">
                        <h2>Your Cart is Empty</h2>
                        <p>Looks like you haven't added anything to your cart yet.</p>
                        <Link to="/" className="browse-restaurants-btn">Browse Restaurants</Link>
                    </div>
                ) : (
                    <>
                        <div className="summary-card">
                            <h2 className="summary-title">Order Summary</h2>
                            <div className="cart-items-list">
                                {cart.map((item, index) => (
                                    <CartItem key={index} item={item} />
                                ))}
                            </div>
                            <div className="price-details">
                                <div className="price-row">
                                    <span>Item Total</span>
                                    <span>₹{itemTotal}</span>
                                </div>
                                <div className="price-row">
                                    <span>Delivery Fee</span>
                                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                                </div>
                                {isMatched && (
                                    <div className="price-row saved-badge">
                                        <span>You saved</span>
                                        <span className="saved-amount">₹{groupOrderSavings}!</span>
                                    </div>
                                )}
                                <div className="price-row grand-total">
                                    <span>Grand Total</span>
                                    <span>₹{grandTotal}</span>
                                </div>
                            </div>
                        </div>

                        {!isMatched && ( // Only show promo strip if not matched yet
                            <div className="promo-strip">
                                <div className="promo-text">
                                    <h3>Save ₹200 delivery fee!</h3>
                                    <p>Wait 5 minutes to find another order near you.</p>
                                </div>
                                <button className="start-matching-btn" onClick={onStartMatching}>
                                    Start Matching
                                </button>
                            </div>
                        )}

                        {/* Simulation buttons for testing purposes */}
                        <div className="simulation-buttons" style={{ display: showMatchingModal ? 'flex' : 'none', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                            <button onClick={() => handleSimulateMatch('matchFound')} style={{ padding: '10px', backgroundColor: '#267e3e', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Simulate Match Found</button>
                            <button onClick={() => handleSimulateMatch('noMatch')} style={{ padding: '10px', backgroundColor: '#cb202d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Simulate No Match</button>
                            <button onClick={() => handleSimulateMatch('hostLeftPromote')} style={{ padding: '10px', backgroundColor: '#ff8c00', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Simulate Host Left</button>
                            <button onClick={() => handleSimulateMatch('loyaltyWaived')} style={{ padding: '10px', backgroundColor: '#1f6b35', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Simulate Loyalty Waived</button>
                        </div>

                        <button className="place-order-btn">
                            {isMatched ? `Pay ₹${grandTotal}` : 'Place Order'}
                        </button>
                    </>
                )}
            </div>
            {showMatchingModal && (
                <MatchingTimerModal 
                    onClose={onCloseMatchingModal} 
                    modalState={modalState} 
                    onConfirmOrder={onConfirmOrder}
                    onExtendMatch={onExtendMatch}
                />
            )}
        </div>
    );
};

export default OrderSummaryPage;

