import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src="path_to_your_image" alt="Image du logo" />
            </div>
            <nav className="menu">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/featured-products">Produits Phares</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
