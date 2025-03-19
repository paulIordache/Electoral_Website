import React from 'react';
import './SecondaryArticle.css';

function SecondaryArticle({ title, timestamp, image }) {
    return (
        <div className="secondary-article">
            <img src={image} alt={title} />
            <div className="article-info">
                <h3>{title}</h3>
                <p>{timestamp}</p>
            </div>
        </div>
    );
}

export default SecondaryArticle;
