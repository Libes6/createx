import React, { FC } from 'react'
import Quality, {
	ReactComponent as Like
} from '../assets/multicolor/Quality.svg'
import { ReactComponent as Repairs } from '../assets/monochrome/Repairs.svg'
import { ReactComponent as Disign } from '../assets/monochrome/InteriorDesign.svg'
import { ReactComponent as Caske } from '../assets/monochrome/caske.svg'
import { ReactComponent as LeftArrow } from '../assets/monochrome/Left.svg'
import { ReactComponent as RightArrow } from '../assets/monochrome/Right.svg'
import { ReactComponent as Map } from '../assets/multicolor/map.svg'
import SEO from '../assets/monochrome/seo.jpg'
import signa from '../assets/multicolor/signature.svg'
import Safety from '../assets/multicolor/Safety.svg'
import Comfort from '../assets/multicolor/Comfort.svg'
import History from '../assets/illustrations/history.jpg'
import Partner1 from '../assets/monochrome/Partner1.png'
import Partner2 from '../assets/monochrome/Partner2.png'
import Person from '../assets/multicolor/person/image.jpg'
import Person1 from '../assets/multicolor/person/image-1.jpg'
import Person2 from '../assets/multicolor/person/image-2.jpg'
import Person3 from '../assets/multicolor/person/image-3.jpg'
import Person4 from '../assets/multicolor/person/image-4.jpg'
import Person5 from '../assets/multicolor/person/image-5.jpg'
import Person6 from '../assets/multicolor/person/image-6.jpg'
import Person7 from '../assets/multicolor/person/image-7.jpg'
import CartPeople from '../components/CartPeople'

const About: FC = () => {
	return (
		<div className='content'>
			<section className='about-header'>
				<div className='container'>
					<div className='info-container-about'>
						<h1 className=''>ABOUT US</h1>
						<p className='description-medium'>
							Createx Construction Bureau has been successfully
							operating in the USA construction market since 2000.
							We are proud to offer you quality construction and
							exemplary service.
						</p>
					</div>
				</div>
			</section>
			<section className='about-about-statistics bg-img-seo'>
				<div className='container'>
					<div className='about-statistics'>
						<div className='statistics-list'>
							<div className='statistics-list__item'>
								<Like /> <h3 className='title-medium'>60%</h3>
								<p className='description-medium'>
									Clients on the recommendation of friends
								</p>
							</div>
							<div className='statistics-list__item'>
								<Repairs />{' '}
								<h3 className='title-medium'>2400+</h3>
								<p className='description-medium'>
									Clients on the recommendation of friends
								</p>
							</div>
							<div className='statistics-list__item'>
								<Caske /> <h3 className='title-medium'>670</h3>
								<p className='description-medium'>
									Clients on the recommendation of friends
								</p>
							</div>
							<div className='statistics-list__item'>
								<Disign />{' '}
								<h3 className='title-medium'>150000+ m2</h3>
								<p className='description-medium'>
									Clients on the recommendation of friends
								</p>
							</div>
						</div>
						<div className='seo-letter'>
							<img src={SEO} alt='' />
							<div className='seo-letter__text'>
								<p>
									Dapibus nec vitae ante mattis. Aliquam
									phasellus ac dui augue in. Sed aliquet in
									egestas hac at proin sed quam. Etiam aliquet
									sagittis non, massa cum pulvinar. Et in leo,
									tempus purus vestibulum ut blandit et mi.
									Odio massa purus vel praesent arcu enim elit
									felis viverra. Magna aliquam interdum mattis
									ipsum arcu. Elit odio elit viverra quis
									metus amet eleifend amet. Vet suspendisse
									faucibus tempor ipsum integer.{' '}
								</p>

								<div className='seo-letter__signature'>
									<div className='author'>
										<p>Courtney Alexander</p>
										<p>
											CEO - Createx Construction Bureau{' '}
										</p>
									</div>
									<img src={signa} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='about-history bg-gray'>
				<div className='container'>
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
					<div className='flex-wrapper our-history'>
						<h3 className='title-medium text-left'>Our history</h3>
						<div className='navigate-arrow'>
							<button className='btm-icon-arrow'>
								<LeftArrow />
							</button>
							<button className='btm-icon-arrow'>
								<RightArrow />
							</button>
						</div>
					</div>
					<div className='flex-wrapper'>
						<div className='list-year'>
							<ul className='list-history'>
								<li>Present</li>
								<li>March 2019</li>
								<li>November 2018</li>
								<li>July 2015</li>
								<li>August 2010</li>
								<li>February 2007</li>
								<li>May 2004</li>
								<li>October 2001</li>
								<li>June 2000</li>
							</ul>
						</div>
						<div className='img-history'>
							<img src={History} alt='' />
							<p className=''>
								Bcelerisque dapibus pharetra nibh semper iaculis
								duis viverra porttitor in. Eu nec vitae,
								malesuada vitae egestas integer et morbi.
								Maecenas sed quis diam posuere malesuada magnis.
								Bcelerisque dapibus. Eu nec vitae,{' '}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='container'>
					<div className='about-partners'>
						<h3 className='title-medium text-center'>
							Supported by 12+ partners
						</h3>
						<ul className='icon-list grid-wrapper'>
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
					<div className='our-team'>
						<h3 className='title-medium text-center'>Our team</h3>
						<p className='text-center'>
							People are at the heart of Createx Construction
							Bureau{' '}
						</p>

						<div className='grid-team'>
							<CartPeople
								img={Person7}
								title={'Courtney Alexander'}
								description={'CEO, Co-Founder'}
							/>
							<CartPeople
								img={Person6}
								title={'Calvin Fox'}
								description={'CTO, Co-Founder'}
							/>
							<CartPeople
								img={Person5}
								title={'Johnny Lane'}
								description={'Commercial Manager'}
							/>
							<CartPeople
								img={Person4}
								title={'Diane Mccoy'}
								description={'Director of Human Resources'}
							/>
							<CartPeople
								img={Person3}
								title={'Judith Warren'}
								description={'Lead Accountant'}
							/>
							<CartPeople
								img={Person2}
								title={'Floyd Simmmons'}
								description={'Finacial Director'}
							/>
							<CartPeople
								img={Person1}
								title={'Serenity Edwards'}
								description={'Director of Marketing'}
							/>
							<CartPeople
								img={Person}
								title={'Shawn Edwards'}
								description={'Tech Lead'}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-gray'>
				<div className='container'>
					<h3 className='text-center title-medium'>
						We work worldwide
					</h3>
					<div className='about-map'>
						<Map />
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
