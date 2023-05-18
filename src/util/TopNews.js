import React, { useState, useEffect } from 'react';
import fallbackImage from '../assets/news-fallback.png';
import './NewsStyles.css'

function TopNews() {
    const [news, setNews] = useState([]);
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=33b0f3de21444180aee6e7eafb4ccaf9')
            .then(response => response.json())
            .then(data => setNews(data.articles.slice(0, 3)));
    }, []);

    const handleImageError = event => {
        event.target.src = fallbackImage;
    };

    return (
        <div>
            <h2 className='heading'>Top News Headlines</h2>
            <div className='container'>
                <ul classname='rounded' style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                    {news.map(article => (
                        <li key={article.title} style={{ alignItems: 'center', fontFamily: 'Arial', fontSize: '18px', margin: '10px 0' }}>
                            <div className='img-container ${hovered ? "hovered" : ""}' onMouseEnter={handleHover}
                                onMouseLeave={handleLeave}>
                                <img className="professional-img" src={article.urlToImage} alt={article.title} />
                            </div>
                            <b></b>
                            <a className='source' href={article.url} style={{ color: '#dddac2', textDecoration: 'none' }}>
                                {article.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TopNews;