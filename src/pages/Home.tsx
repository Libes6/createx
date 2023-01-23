import React, { FC, useRef } from 'react'

import { useVideo } from 'react-use'
import { ReactComponent as LeftArrow } from '../assets/monochrome/Left.svg'
import { ReactComponent as RightArrow } from '../assets/monochrome/Right.svg'
import build from '../assets/illustrations/build1.jpg'
import build2 from '../assets/illustrations/build2.jpg'
import build3 from '../assets/illustrations/build3.jpg'

import Quality from '../assets/multicolor/Quality.svg'
import Safety from '../assets/multicolor/Safety.svg'
import Comfort from '../assets/multicolor/Comfort.svg'
import Partner1 from '../assets/monochrome/Partner1.png'
import Partner2 from '../assets/monochrome/Partner2.png'
import Partner from '../assets/monochrome/partner.jpg'

import Construction from '../assets/monochrome/Construction.svg'
import ProjectDevelopment from '../assets/monochrome/ProjectDevelopment.svg'
import InteriorDesign from '../assets/monochrome/InteriorDesign.svg'
import Repairs from '../assets/monochrome/Repairs.svg'

import myvideo from '../assets/video.mp4'
import VideoPlayer from '../components/VideoPlayer'
import InputCustom from '../components/InputCustom'
import CartItem from '../components/CartItem'
import BtnView from '../components/BtnView'
import ProgressBar from "../components/ProgressBar";
import News from "../components/News";
import FeedbackForm from "../components/FeedbackForm";

const HomePage: FC = () => {
	return (
		<div className='content'>
			<section className='slider-section'>
				<div className='container'>
					<div className='info-container'>
						<h1 className='light'>
							CREATE<span className='primary'>X </span>
							CONSTRUCTION
						</h1>
						<p className='light'>
							Cras ultrices leo vitae non viverra. Fringilla nisi
							quisque consequat, dignissim vitae proin ipsum sed.
							Pellentesque nec turpis purus eget pellentesque
							integer ipsum elementum felis.
						</p>
						<div className='home-btn-wrapper'>
							<button className='btn btn-secondary'>
								Learn more about us
							</button>
							<button className='btn btn-primary'>
								SUBMIT REQUEST
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className='about-section'>
				<div className='container'>
					<h2 className='text-center'>
						We are Createx Construction Bureau{' '}
					</h2>
					<p className='text-center'>
						We are rightfully considered to be the best construction
						company in the USA.
					</p>
					<VideoPlayer />
				</div>
			</section>

			<section className='signs-section'>
				<div className='container suspension-block'>
					<div className='text-block-one'>
						<h2 className='text-center'>Our core values</h2>
						<p className='text-center '>
							Our mission is to set the highest standards for
							construction sphere.
						</p>
					</div>

					<div className='grid-signs'>
						<div className='grid-signs-item'>
							<img
								className='grid-item-img'
								src={Quality}
								alt=''
							/>
							<h3 className='grid-item-title'>Quality</h3>
							<p className='description-medium'>
								Culpa nostrud commodo ea consequat aliquip
								reprehenderit. Veniam velit nostrud aliquip
								sunt.
							</p>
						</div>
						<div className='grid-signs-item'>
							<img
								className='grid-item-img'
								src={Safety}
								alt=''
							/>
							<h3 className='grid-item-title'>Safety</h3>
							<p className='description-medium'>
								Anim reprehenderit sint voluptate exercitation
								adipisicing laborum adipisicing. Minim empor est
								ea.
							</p>
						</div>
						<div className='grid-signs-item'>
							<img
								className='grid-item-img'
								src={Comfort}
								alt=''
							/>
							<h3 className='grid-item-title'>Comfort</h3>
							<p className='description-medium'>
								Sit veniam aute dolore adipisicing nulla sit
								culpa. Minim mollit voluptate ullamco proident
								ea ad.
							</p>
						</div>
					</div>
					<div className='form-quest'>
						<h3 className='title-small text-center'>
							Want to know more? Ask us a question:
						</h3>
						<div className='input-grid input-quest'>
							<InputCustom
								text={'Почта'}
								type={'text'}
								size={'small'}
							/>
							<InputCustom
								text={'Почта'}
								type={'text'}
								size={'small'}
							/>
							<InputCustom
								text={'Почта'}
								type={'text'}
								size={'small'}
							/>
							<button className=' btn btn-primary'>send</button>
						</div>
					</div>
				</div>
			</section>
			<section className='services bg-gray-img'>
				<div className='container'>
					<h3 className='title-medium text-center'>Our services</h3>
					<p className='description-medium text-center'>
						Createx Construction Bureau is a construction giant with
						a full range of construction services.
					</p>
					<div className='card-grid card-services'>
						<CartItem
							img={Construction}
							description={'Construction'}
						/>
						<CartItem
							img={ProjectDevelopment}
							description={'Project Development'}
						/>
						<CartItem
							img={InteriorDesign}
							description={'Interior Design'}
						/>
						<CartItem img={Repairs} description={'Repairs'} />
					</div>
					<BtnView
						text={'Learn more about our services'}
						textButton={'View services'}
					></BtnView>
				</div>
			</section>
			<section className='projects'>
				<div className='container'>
					<div className='flex-wrapper'>
						<h3 className='title-small text-left projects__title'>
							Browse our selected projects and learn more about
							our work
						</h3>
						<div className='navigate-arrow'>
							<button className='btm-icon-arrow'>
								<LeftArrow />
							</button>
							<button className='btm-icon-arrow'>
								<RightArrow />
							</button>
						</div>
					</div>
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
					</div>
				</div>
				<BtnView
					text={'Explore all our works'}
					textButton={'View portfolio'}
				></BtnView>
			</section>
			<section className=' partners bg-gray'>
				<div className='container'>
					<h3 className='title-medium text-center'>
						Supported by 12+ partners
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
			<section className='statistics-section'>
				<div className='container'>
					<h3 className='text-center title-medium statistics-section__title'>Some facts and figures</h3>
					<div className='flex-wrapper-center '>
						<div><ProgressBar percentage={95} colour={'#F89828'} colorroler={'#eaceb2'} size={50} strokeWidth={'10px'}/><p  className='description-large-circle text-center'>Totally satisfied clients</p></div>
						<div><ProgressBar percentage={20} colour={'#F52F6E'} colorroler={'#e7acbf'} size={50} strokeWidth={'10px'}/><p  className='description-large-circle text-center'>Years of experience</p></div>
						<div><ProgressBar percentage={70} colour={'#5A87FC'} colorroler={'#bfd5ff'} size={50} strokeWidth={'10px'}/><p  className='description-large-circle text-center'>Working hours spent</p></div>
						<div><ProgressBar percentage={100} colour={'#03CEA4'} colorroler={'#dccebd'} size={50} strokeWidth={'10px'}/><p className='description-large-circle text-center'>Succeeded projects</p></div>

					</div>
					<h3 className='text-center title-medium statistics-section__title'>Recent news</h3>
					<div className='statistics-section__news'>
						<News/>
						<BtnView
							text={'Explore all our news posts'}
							textButton={'View all news'}
						></BtnView>
					</div>

				</div>

			</section>

		</div>
	)
}

export default HomePage
