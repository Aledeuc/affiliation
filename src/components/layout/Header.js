import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src="path_to_your_logo" alt="Logo" className="logo" />
            </div>
            <nav className="menu">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/featured-products">Produits Phares</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
