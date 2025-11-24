import React from 'react';
import './JoinerConfirmationModal.css';

const JoinerConfirmationModal = ({ onClose, onConfirmJoin }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2 className="modal-title">You’re joining a nearby order…</h2>
                <p className="modal-subtitle">Confirm to join this group order and get FREE delivery.</p>
                
                <div className="modal-buttons">
                    <button className="join-save-btn" onClick={onConfirmJoin}>Join & Save ₹200</button>
                    <button className="cancel-join-btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default JoinerConfirmationModal;