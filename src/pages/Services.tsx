import React from 'react'
import ServicesItem from '../components/ServicesItem'
import service1 from '../assets/illustrations/services.jpg'
import service2 from '../assets/illustrations/services2.jpg'
import service3 from '../assets/illustrations/services3.jpg'
import service4 from '../assets/illustrations/services4.jpg'
import {useNavigate} from "react-router-dom";

const Services = () => {
	const navigate =useNavigate()
	const onNavigate=()=>{
		navigate('/Disign')
	}
	return (
		<div className='content'>
			<section className='services-header'>
				<div className='container'>
					<div className='info-container-about'>
						<h1 className=''>SERVICES</h1>
						<p className='description-medium'>
							If you are looking for a full-service construction
							company, look to Createx Construction Bureau. We are
							doing our best to be a partner for all of your
							construction needs.
						</p>
					</div>
				</div>
			</section>

			<section className='services-list'>
				<div className='container'>
					<div className='flex-services-cart'>
						<ServicesItem
							img={service1}
							title='Construction'
							description='Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. '
						/>
						<ServicesItem
							img={service2}
							title='Project Development'
							description='Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. '
						/>
						<ServicesItem
							img={service3}
							title='Interior Design'
							description='Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. '
						/>
						<ServicesItem
							img={service4}
							title='Repairs'
							description='Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna. '
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Services
