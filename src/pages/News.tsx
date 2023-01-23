import React, {FC} from 'react';
import NewsBlock from '../components/News'
const News:FC = () => {
    return (
        <div className='content'>
            <section className='news-header'>
                <div className='container'>
                    <div className='info-container-about'>
                        <h1 className=''>NEWS</h1>
                        <p className='description-medium'>
                            Stay tuned with our news, expert tips and articles.
                        </p>
                    </div>
                </div>
            </section>
            <section className='news-list'>
                <div className='container'>
                    <div className='news-list__header'>
                        <h3 className='text-center title-medium'>Categories</h3>

                        <ul className='grid-category'>
                            <button className='btn hover-outline-primary'>All News</button>
                            <button className='btn hover-outline-primary'>Company News</button>
                            <button className='btn hover-outline-primary'>Innovation</button>
                            <button className='btn hover-outline-primary'>Industry News</button>
                            <button className='btn hover-outline-primary'>Expert Tips</button>
                            <button className='btn hover-outline-primary'>Marketing</button>
                        </ul>
                    </div>
                 <NewsBlock type='default'/>
                </div>
            </section>

        </div>
    );
};

export default News;
