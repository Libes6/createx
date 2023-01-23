import React, { FC } from 'react'
import news1 from '../assets/illustrations/news1.jpg'
import news2 from '../assets/illustrations/news2.jpg'
import news3 from '../assets/illustrations/news3.jpg'

interface INews{
	type?:'default'
}
const News: FC<INews> = ({type}) => {
	return (
		<div className={`news  ${type=='default'?'news-grid-default':'news-grid'}`}>
			<div className={`${type=='default'?'news-grid-default__item':'news-grid__item'}`}>
				<img
					src={news1}
					alt=''
				/>
				<div className='news-grid__bottom'>
					<p className='news__title'>
						How to Build Climate Change-Resilient Infrastructure
					</p>
					<div className='news__info'>
						<p>Industry News</p>
						<p >June 24, 2020</p>
						<p>4 comments</p>

					</div>
					<p className='news__description'> Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>
				</div>
			</div>
			<div className={`${type=='default'?'news-grid-default__item':'news-grid__item'}`}>
				<img
					src={news2}
					alt=''
				/>
				<div className='news-grid__bottom'>
					<p className='news__title'>
						How Construction Can Help Itself
					</p>
					<div className='news__info'>
						<p>Industry News</p>
						<p >June 24, 2020</p>
						<p>4 comments</p>

					</div>
					{type=='default'?<p className='news__description'> Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>
					:null}
				</div>
			</div>
			<div className={`${type=='default'?'news-grid-default__item':'news-grid__item'}`}>
				<img
					src={news3}
					alt=''
				/>
				<div className='news-grid__bottom'>
					<p className='news__title'>
						Types of Flooring Materials
					</p>
					<div className='news__info'>
						<p>Industry News</p>
						<p >June 24, 2020</p>
						<p>4 comments</p>

					</div>
					{type=='default'?<p className='news__description'> Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>
						:null}
				</div>
			</div>
			{type=='default'?
				<>
					<div className={`${type=='default'?'news-grid-default__item':'news-grid__item'}`}>
						<img
							src='https://saomos.news/upload/resize_cache/iblock/3e3/300_0_1/3e3bc9af7951a916beab5f7b3ba24c9b.jpeg'
							alt=''
						/>
						<div className='news-grid__bottom'>
							<p className='news__title'>
								Types of Flooring Materials
							</p>
							<div className='news__info'>
								<p>Industry News</p>
								<p >June 24, 2020</p>
								<p>4 comments</p>

							</div>
							{type=='default'?<p className='news__description'> Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>
								:null}
						</div>
					</div>
					<div className={`${type=='default'?'news-grid-default__item':'news-grid__item'}`}>
						<img
							src='https://vl-media.fr/wp-content/uploads/2022/02/construction-site-g0fc587a19_1920.jpg'
							alt=''
						/>
						<div className='news-grid__bottom'>
							<p className='news__title'>
								Types of Flooring Materials
							</p>
							<div className='news__info'>
								<p>Industry News</p>
								<p >June 24, 2020</p>
								<p>4 comments</p>

							</div>
							{type=='default'?<p className='news__description'> Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>
								:null}
						</div>
					</div>
					<div className={`${type=='default'?'news-grid-default__item':'news-grid__item'}`}>
						<img
							src='https://phonoteka.org/uploads/posts/2021-06/1624459317_11-phonoteka_org-p-stroika-oboi-krasivo-13.jpg'
							alt=''
						/>
						<div className='news-grid__bottom'>
							<p className='news__title'>
								Types of Flooring Materials
							</p>
							<div className='news__info'>
								<p>Industry News</p>
								<p >June 24, 2020</p>
								<p>4 comments</p>

							</div>
							{type=='default'?<p className='news__description'> Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>
								:null}
						</div>
					</div>
				</>

				:null}
			<div className='news__pagination'>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>

			</ul>
			</div>
		</div>
	)
}

export default News
