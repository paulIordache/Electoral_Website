import React from 'react';
import './SecondaryFooter.css';

function SecondaryFooter() {
    return (
        <footer className="secondary-footer">
            <ul>
                <li>&copy; {new Date().getFullYear()} Your Company Name</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Contact</li>
                <li>Feedback</li>
            </ul>
        </footer>
    );
}

export default SecondaryFooter;
