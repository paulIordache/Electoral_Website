import React from 'react';
import './ArticleItem.css';

function ArticleItem({ title, readTime }) {
    return (
        <article className="article-item">
            <h3>{title}</h3>
            <p>{readTime}</p>
        </article>
    );
}

export default ArticleItem;
