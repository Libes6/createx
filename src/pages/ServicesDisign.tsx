import React, { FC } from 'react'
import accordionimg from '../assets/illustrations/acordion.jpg'
import { ReactComponent as LeftArrow } from '../assets/monochrome/Left.svg'
import { ReactComponent as RightArrow } from '../assets/monochrome/Right.svg'
import { ReactComponent as Mark } from '../assets/multicolor/Mark.svg'
import Accordion from '../components/Accordion'
import ServicesCart from '../components/ServicesCart'
import Quality from '../assets/multicolor/Quality.svg'
import Safety from '../assets/multicolor/Safety.svg'
import Comfort from '../assets/multicolor/Comfort.svg'
import CartItem from '../components/CartItem'
import build from '../assets/illustrations/build1.jpg'
import build2 from '../assets/illustrations/build2.jpg'
import build3 from '../assets/illustrations/build3.jpg'
import BtnView from '../components/BtnView'
import Partner1 from '../assets/monochrome/Partner1.png'
import Partner2 from '../assets/monochrome/Partner2.png'
const ServicesDisign: FC = () => {
	return (
		<div className='content'>
			<section className='services-disign-header'>
				<div className='container'>
					<div className='info-container-about'>
						<h1 className=''>INTERIOR DESIGN</h1>
						<p className='description-medium'>
							Dui augue nec mi mi. Ut ac lectus donec fames
							pellentesque. Laoreet aenean vulputate elementum
							blandit amet.
						</p>
					</div>
				</div>
			</section>
			<section className='services-disign-accordion'>
				<div className='container'>
					<div className='services-disign-accordion__accordion'>
						<div className='accordion__img'>
							<img src={accordionimg} alt='' />
						</div>

						<div className='accordion__text'>
							<h3 className='title-medium text-left'>We offer</h3>
							<Accordion
								title={'Interior design of apartments'}
								content={
									'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.'
								}
							/>

							<Accordion
								title={'Interior design of private houses'}
								content={
									'Adipiscing nunc arcu enim elit mattis eu placerat proin.  ac facilisis.'
								}
							/>
						</div>
					</div>
					<h3 className='title-medium text-left'>
						That’s how we do it
					</h3>
					<div className='services-disign-accordion__list-cart'>
						<ServicesCart />
					</div>
				</div>
			</section>
			<section className='services-disign-bg-gray'>
				<div className='container'>
					<h3 className='title-medium text-center light'>
						Our benefits
					</h3>
					<p className='text-center'>
						Our mission is to set the highest standards for
						construction sphere.
					</p>
					<>
						<div className='grid-signs'>
							<div className='grid-signs-item'>
								<img
									className='grid-item-img'
									src={Quality}
									alt=''
								/>
								<h3 className='grid-item-title light'>
									Quality
								</h3>
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
								<h3 className='grid-item-title light'>
									Safety
								</h3>
								<p className='description-medium'>
									Anim reprehenderit sint voluptate
									exercitation adipisicing laborum
									adipisicing. Minim empor est ea.
								</p>
							</div>
							<div className='grid-signs-item'>
								<img
									className='grid-item-img'
									src={Comfort}
									alt=''
								/>
								<h3 className='grid-item-title light'>
									Comfort
								</h3>
								<p className='description-medium'>
									Sit veniam aute dolore adipisicing nulla sit
									culpa. Minim mollit voluptate ullamco
									proident ea ad.
								</p>
							</div>
						</div>
					</>
				</div>
				<div className='btn-overlap-wrapp'>
					<button className='btn btn-primary'>
						Discuss a project
					</button>
				</div>
			</section>

			<section className='projects'>
				<div className='container'>
					<div className='flex-wrapper'>
						<h3 className='title-medium text-left projects__title'>
							Related projects
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
			<section className='services-disign bg-gray'>
				<div className='container'>
					<h3 className='text-center title-medium'>Pricing</h3>
					<p className='text-center'>
						We offer you three categories of construction.
					</p>

					<div className='grid-pricing'>
						<div className='grid-pricing-item'>
							<div className='grid-pricing-item__header'>
								BASIC
								<p>$20 per m2</p>
							</div>
							<div className='grid-pricing-item__body'>
								<ul>
									<li>
										Installation plan
										<Mark />
									</li>
									<li>
										Planning solutions (2-3 options)
										<Mark />
									</li>
									<li>
										Lighting plan
										<Mark />
									</li>
									<li>
										Flooring plan
										<Mark />
									</li>
									<li>
										Heating floor laying scheme
										<Mark />
									</li>
									<li>
										Air conditioner zones layout
										<Mark />
									</li>

								</ul>
							</div>
							<div className='grid-pricing-item__bottom'>
								<button className='btn btn-outline-primary'>
									send request
								</button>
							</div>
						</div>
						<div className='grid-pricing-item'>
							<div className='grid-pricing-item__header'>
								STANDARD
								<p>$30 per m2</p>
							</div>
							<div className='grid-pricing-item__body'>
								<ul>
									<li>
										Installation plan
										<Mark />
									</li>
									<li>
										Planning solutions (2-3 options)
										<Mark />
									</li>
									<li>
										Lighting plan
										<Mark />
									</li>
									<li>
										Flooring plan
										<Mark />
									</li>
									<li>
										Heating floor laying scheme
										<Mark />
									</li>
									<li>
										Air conditioner zones layout
										<Mark />
									</li>
									<li>
										3D visualization of all rooms
										<Mark />
									</li>

								</ul>
							</div>
							<div className='grid-pricing-item__bottom'>
								<button className='btn btn-outline-primary'>
									send request
								</button>
							</div>
						</div>
						<div className='grid-pricing-item grid-pricing-item-new'>
							<div className='grid-pricing-item__header'>
								BUSINESS
								<p>$50 per m2</p>
							</div>
							<div className='grid-pricing-item__body'>
								<ul>
									<li>
										Installation plan
										<Mark />
									</li>
									<li>
										Planning solutions (2-3 options)
										<Mark />
									</li>
									<li>
										Lighting plan
										<Mark />
									</li>
									<li>
										Flooring plan
										<Mark />
									</li>
									<li>
										Heating floor laying scheme
										<Mark />
									</li>
									<li>
										Air conditioner zones layout
										<Mark />
									</li>
									<li>
										3D visualization of all rooms
										<Mark />
									</li>
									<li>
										Visualization of each room (3-4 angles)
										<Mark />
									</li>

								</ul>
							</div>
							<div className='grid-pricing-item__bottom'>
								<button className='btn btn-outline-primary'>
									send request
								</button>
							</div>
						</div>
					</div>
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
				</div>
			</section>
		</div>
	)
}

export default ServicesDisign
