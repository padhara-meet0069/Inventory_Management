import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you'll create a CSS file for styles

const Header = () => {
    return (
        <div className="header">
            <div>
      <h1>Inventory Management System</h1>
                
                
            </div>
            <Link to="/" className="header-link">Inventory Dashboard</Link>
            <Link to="/add-inventory" className="header-link">Add Inventory Item</Link>
            <Link to="/add-supplier" className="header-link">Add Supplier</Link>
            <Link to="/supplier-list" className="header-link">Supplier List</Link>
        </div>
    );
};

export default Header;
