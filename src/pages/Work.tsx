import React, { FC } from 'react'
import CartItem from "../components/CartItem";
import build from "../assets/illustrations/build1.jpg";
import build2 from "../assets/illustrations/build2.jpg";
import build3 from "../assets/illustrations/build3.jpg";
import build4 from "../assets/illustrations/portfolio-card/image.png";
import build5 from "../assets/illustrations/portfolio-card/image-1.png";
import build6 from "../assets/illustrations/portfolio-card/image-2.png";
import build7 from "../assets/illustrations/portfolio-card/image-3.png";
import build8 from "../assets/illustrations/portfolio-card/image-3.png";
import build9 from "../assets/illustrations/portfolio-card/image-4.png";
import { ReactComponent as LeftArrow } from '../assets/monochrome/Left.svg'
import { ReactComponent as RightArrow } from '../assets/monochrome/Right.svg'
import Partner1 from "../assets/monochrome/Partner1.png";
import Partner2 from "../assets/monochrome/Partner2.png";
import Partner from "../assets/monochrome/partner.jpg";

const Work: FC = () => {
	return (
		<div className='content'>
			<section className='work-header'>
				<div className='container'>
					<div className='info-container-about'>
						<h1 className=''>OUR WORK</h1>
						<p className='description-medium'>
							Our portfolio represents 20 years of construction
							experience backed by a passion for perfect client
							service, quality and innovations in consctuction
							industry.
						</p>
					</div>
				</div>
			</section>
			<section className="work-list">
				<div className="container">
					<div className='card-grid-view card-work'>
						<CartItem
							img={build}
							description={'Gold Ukraine'}
							type='view'
						/>
						<CartItem
							img={build2}
							description={'Main house'}
							type='view'
						/>
						<CartItem
							img={build3}
							description={'Chto eto'}
							type='view'
						/>
						<CartItem
							img={build}
							description={'Gold Ukraine'}
							type='view'
						/>
						<CartItem
							img={build2}
							description={'Main house'}
							type='view'
						/>
						<CartItem
							img={build3}
							description={'Chto eto'}
							type='view'
						/>
						<CartItem
							img={build}
							description={'Gold Ukraine'}
							type='view'
						/>
						<CartItem
							img={build2}
							description={'Main house'}
							type='view'
						/>
						<CartItem
							img={build3}
							description={'Chto eto'}
							type='view'
						/>
					</div>

				</div>
			</section>
			<section className=' partners bg-gray'>
				<div className='container'>


					<div className='double-grid flex-wrapper'>
						<div className='grid-item-text'>
							<h3 className='text-left title-medium'>
								What our clients are saying
							</h3>
							<div className='comment'>
								<img
									className='comment__img'
									src='https://sun9-west.userapi.com/sun9-69/s/v1/ig2/5sEdrMVyajjDWy33IUPgOhzDFxWp1s0inaRYj30lAoLL2jjba07ptlZbdQd6Iuu-pcHnlOZyzRZQK_ywwjGysBAL.jpg?size=453x604&quality=95&type=album'
									alt=''
								/>
								<p>
									Ipsum aute sunt aliquip aute et occaecat.
									Anim minim do cillum eiusmod enim.
									Consectetur magna cillum consequat minim
									laboris cillum laboris voluptate minim
									proident exercitation ullamco.{' '}
								</p>
								<div className='comment__bottom'>
									<div className='comment__bottom-text'>
										<p className='comment__name'>
											Shawn Edwards
										</p>
										<p className='comment__company'>
											Position, Company name
										</p>
									</div>
									<div className='comment__bottom-navigate'>
										<div className='navigate-arrow'>
											<button className='btm-icon-arrow'>
												<LeftArrow />
											</button>
											<button className='btm-icon-arrow'>
												<RightArrow />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='grid-item-img'>
							<img src={Partner} alt=""/>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='container'>
					<h3 className='title-medium text-center'>
						Our clients
					</h3>
					<ul className='icon-list flex-wrapper'>
						<li>
							<img src={Partner1} alt='' />
						</li>
						<li>
							<img src={Partner2} alt='' />
						</li>
						<li>
							<img src={Partner1} alt='' />
						</li>
						<li>
							<img src={Partner2} alt='' />
						</li>
						<li>
							<img src={Partner1} alt='' />
						</li>
						<li>
							<img src={Partner2} alt='' />
						</li>
					</ul>
				</div>
			</section>
		</div>
	)
}

export default Work
