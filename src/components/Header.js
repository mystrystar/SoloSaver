import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cart }) => {
    return (
        <header className="app-header">
            <div className="header-content">
                <Link to="/" className="logo-link">
                    <h1>SoloSaver</h1>
                </Link>
                <nav>
                    <Link to="/summary" className="cart-link">
                        <i className="fa fa-shopping-cart"></i> View Cart ({cart.length})
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
