import React, { useState, useEffect } from 'react';
import './MatchingTimerModal.css';

const MatchingTimerModal = ({ onClose, modalState, onConfirmOrder, onExtendMatch }) => {
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

    useEffect(() => {
        if (modalState === 'matching' && timeLeft === 0) {
            // Optional: automatically transition to 'noMatch' or call a prop function
            // if no match found after timer. For now, timer just stops.
            return;
        }

        if (modalState === 'matching') {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [timeLeft, modalState]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    let title, subtitle, content;
    let showTimer = false;
    let showButtons = true;
    let buttonPrimary = {};
    let buttonSecondary = {};
    let modalClass = "modal-content";

    switch (modalState) {
        case 'matching':
            title = "Finding Another Order Near You…";
            subtitle = "If someone orders within 5 minutes, you get FREE delivery.";
            showTimer = true;
            buttonPrimary = { text: "Wait for Match", action: () => {}, class: "wait-btn" };
            buttonSecondary = { text: "Checkout Normally", action: onClose, class: "checkout-btn" };
            break;
        case 'matchFound':
            title = "Match Found! Your delivery is now FREE.";
            subtitle = "Another customer joined your order.";
            buttonPrimary = { text: "Confirm Order", action: onConfirmOrder, class: "confirm-order-btn" };
            showButtons = false; // "Confirm Order" will be the only button, no secondary
            modalClass += " match-found";
            break;
        case 'hostLeftPromote':
            title = "Leader left.";
            subtitle = "You are now the host. We added 5 more minutes.";
            showTimer = true; // Timer restarts or extends
            setTimeLeft(300); // Reset for 5 more minutes
            buttonPrimary = { text: "Wait for Match", action: () => {}, class: "wait-btn" };
            buttonSecondary = { text: "Checkout Normally", action: onClose, class: "checkout-btn" };
            modalClass += " host-left-promote";
            break;
        case 'noMatch':
            title = "No match found.";
            subtitle = "Would you like to wait 5 more minutes?";
            showTimer = false;
            buttonPrimary = { text: "Extend 5 Minutes", action: onExtendMatch, class: "extend-match-btn" };
            buttonSecondary = { text: "Checkout Normally", action: onClose, class: "checkout-btn" };
            modalClass += " no-match";
            break;
        case 'loyaltyWaived':
            title = "Delivery Fee Waived!";
            subtitle = "Leader left, but since you waited, your delivery fee is waived anyway!";
            showTimer = false;
            showButtons = false; // No buttons needed for this message
            modalClass += " loyalty-waived";
            break;
        case 'matchSuccessJoiner':
            title = "You joined the group order.";
            subtitle = "Delivery is free.";
            showTimer = false;
            showButtons = false; // No buttons needed for this message
            modalClass += " match-success-joiner";
            break;
        default:
            title = "Modal Title";
            subtitle = "Modal Subtitle";
            break;
    }

    return (
        <div className="modal-backdrop">
            <div className={modalClass}>
                <h2 className="modal-title">{title}</h2>
                <p className="modal-subtitle">{subtitle}</p>
                
                {showTimer && (
                    <div className="timer-container">
                        <div className="timer-circle">
                            <span className="timer-text">{formatTime(timeLeft)}</span>
                        </div>
                    </div>
                )}

                {modalState === 'matchFound' && (
                    <div className="match-found-content">
                        <i className="fa fa-check-circle match-found-icon"></i>
                        <button className={buttonPrimary.class} onClick={buttonPrimary.action}>
                            {buttonPrimary.text}
                        </button>
                    </div>
                )}

                {showButtons && modalState !== 'matchFound' && (
                    <div className="modal-buttons">
                        <button className={buttonPrimary.class} onClick={buttonPrimary.action}>
                            {buttonPrimary.text}
                        </button>
                        {buttonSecondary.text && (
                            <button className={buttonSecondary.class} onClick={buttonSecondary.action}>
                                {buttonSecondary.text}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatchingTimerModal;