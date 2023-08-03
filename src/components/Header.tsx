import React, { FC } from 'react'
// import {ReactComponent as logo} from "../assets/multicolor/logo.svg";
import logo from '../assets/multicolor/logo.svg'
import Chat from '../assets/multicolor/Navbar/Chat.svg'
// import IPhone from '../assets/multicolor/Navbar/IPhone.svg'
import {Link} from "react-router-dom";
interface IheaderProps{
	type?:'default'|"white"
}
const Header: FC<IheaderProps> = ({type}) => {
	return (
		<div className={`header ${type=="white"?'header--main':''}`}>
			<div className='container header__container'>
				<Link to='/'>
					<img src={logo} alt='321' />
				</Link>
				<nav className='nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<Link to='/About'>About Us</Link>
						</li>
						<li className='nav__item'>
							<Link to='Services'>Services</Link>
						</li>
						<li className='nav__item'>
							<Link to='Work'>Work</Link>
						</li>
						<li className='nav__item'>
							<Link to='News'>News</Link>
						</li>
						<li className='nav__item'>
							<Link to='Contacts'>Contacts</Link>
						</li>
					</ul>
				</nav>
				<div className='header-contacts'>
					<a href='tel:89609498335'>
						<div className='header-contacts-item'>
{/* 							<img src={IPhone} alt='' /> */}
						</div>
						<div className='header-contacts-item'>
							<span className='contact__caption '>Call us</span>
							<span className='contact__tel'>(405) 555-0128</span>
						</div>
					</a>

					<a href='mailto:fya-07@list.ru'>
						<div className='header-contacts-item'>
							<img src={Chat} alt='' />
						</div>
						<div className='header-contacts-item'>
							<span className='contact__caption'>Talk to us</span>
							<span className='contact__tel'>hello@createx.com</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
