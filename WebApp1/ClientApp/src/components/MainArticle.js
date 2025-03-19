import React from 'react';
import './MainArticle.css';
import simion from '../pictures/simion.jpg';

function MainArticle({ title, content, image, altText }) {
    return (
        <section className="main-article">
            <div className="main-article-content">
                <h2>{title}</h2>
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <button className="cta-button">Read More on the Election</button>
            </div>
            <div className="main-article-image-container">
                <img
                    src={image}
                    srcSet={`${image} 300w, ${image} 600w, ${image} 900w`}
                    sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
                    alt={altText}
                    className="main-article-image"
                />
            </div>
        </section>
    );
}

export default MainArticle;
