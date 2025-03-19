import React, { useEffect, useRef } from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {
    const headerRef = useRef(null);
    let lastScrollTop = 0;

    useEffect(() => {
        const header = headerRef.current;

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.classList.add('header-hidden');
                header.classList.remove('header-visible');
            } else {
                // Scrolling up
                header.classList.add('header-visible');
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header header-visible" ref={headerRef}>
            <div className="header-top">
                <div className="date">Friday, January 24, 2025</div>
                <div className="link">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>
                        <h1 className="title">Romanian Election News</h1>
                    </NavLink>
                </div>
                <div className="subscribe">
                    <button className="subscribe-btn">SUBSCRIBE</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
