import React from 'react';
import './Footer.css'; // Assuming you'll create a CSS file for styles

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2024 Inventory Management System</p>
            <div className="footer-links">
                <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                <a href="/contact" className="footer-link">Contact Us</a>
            </div>
        </div>
    );
};

export default Footer;
