import React from 'react';
import './PrimaryFooter.css';

function PrimaryFooter() {
    return (
        <footer className="primary-footer">
            <h1>
                Electoral Site
                <a href="#home" id="goToHome">
                    Home
                </a>
            </h1>
            <div className="listings">
                <div className="section">
                    <ul>
                        <li>General Information</li>
                        <li className="has-sub">
                            <ul>
                                <li>About Elections</li>
                                <li>Election Calendar</li>
                                <li>Election Legislation</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <ul>
                        <li>Useful Resources</li>
                        <li className="has-sub">
                            <ul>
                                <li>Forms</li>
                                <li>FAQs</li>
                                <li>Guides and Manuals</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="subscribe">
                    <ul>
                        <li>Subscribe</li>
                        <li>Special Offers</li>
                        <li>Newsletter</li>
                        <li></li>
                        <li>Account</li>
                        <li>Settings</li>
                        <li></li>
                        <li>Help</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default PrimaryFooter;
