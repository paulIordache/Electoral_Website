import React from 'react';
import ArticleItem from './ArticleItem';
import './ArticleList.css';

function ArticleList() {
    const articles = [
        {
            title: 'Drama Unfolds: Romanian Election Sparks Controversy',
            readTime: '5 MIN READ',
        },
        {
            title: 'Georgescu’s Meteoric Rise Amid Election Chaos',
            readTime: '7 MIN READ',
        },
        {
            title: 'Lasconi’s Campaign: A Battle Against the Odds',
            readTime: '6 MIN READ',
        },
        {
            title: 'Election Cancellation: What’s Next for Romania?',
            readTime: '4 MIN READ',
        },
        {
            title: 'Protests Ignite Over Disputed Election Results',
            readTime: '8 MIN READ',
        },
        {
            title: 'Georgescu’s Appeal Rejected: European Court’s Verdict',
            readTime: '5 MIN READ',
        },
        {
            title: 'Election Fraud Allegations: Romania Investigates',
            readTime: '6 MIN READ',
        },
        {
            title: 'Romanian Diaspora: Registering for Change',
            readTime: '5 MIN READ',
        },
        {
            title: 'Post-Election Landscape: Romania’s Political Future',
            readTime: '7 MIN READ',
        },
        {
            title: 'Constitutional Court Shakes Up Election Results',
            readTime: '6 MIN READ',
        },
        {
            title: 'Fiscal Challenges Loom Amid Political Unrest',
            readTime: '8 MIN READ',
        },
        {
            title: 'Defence Strategy in the Face of Political Uncertainty',
            readTime: '5 MIN READ',
        },
    ];

    return (
        <section className="article-list">
            {articles.map((article, index) => (
                <ArticleItem
                    key={index}
                    title={article.title}
                    readTime={article.readTime}
                />
            ))}
        </section>
    );
}

export default ArticleList;
