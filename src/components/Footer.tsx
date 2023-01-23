import React, {FC} from 'react';
import logo from '../assets/multicolor/logo-white.svg'
import socials from '../assets/multicolor/socials.svg'
import InputCustom from "./InputCustom";
import {ReactComponent as Heart} from "../assets/multicolor/Heart.svg";
import {Link} from "react-router-dom";

const Footer:FC = () => {
    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div className='grid-footer'>
                        <div>
                            <div className='flex-wrapper-left footer-title'>
                                <Link to='/Services'>
                                    <img src={logo} alt='321' />
                                </Link>
                                <img src={socials} alt=""/>
                            </div>
                                <p className='description-small'>Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.</p>

                        </div>
                        <div>
                            <h3 className='title-small light'>
                                Let’s stay in touch
                            </h3>
                            <InputCustom text={'s'} type={'text'} size={'small'}></InputCustom>
                            <p className='description-small'>*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.</p>
                        </div>


                        <div>
                            <h3 className='description-large light footer-title'>
                                HEAD OFFICE
                            </h3>
                            <ul className='footer-list'>
                                <li> <p className='description-medium'> <span className='light'>Address: </span>8502 Preston Rd. Inglewood, New York</p></li>
                                <li>  <p className='description-medium'> <span className='light'>Call: </span>(405) 555-0128</p></li>
                                <li><p className='description-medium'> <span className='light'>Email: </span>hello@createx.com</p></li>
                            </ul>



                        </div>



                        <div>
                            <h3 className='description-medium light footer-title'>
                                WHO WE ARE
                            </h3>
                            <ul className='footer-list'>
                                <li> <a  className='link' href="">About Us</a></li>
                                <li>  <a  className='link' href="">Available Positions</a></li>
                                <li> <a  className='link' href="">Contacts</a></li>
                            </ul>



                        </div>
                        <div>
                            <h3 className='description-medium light footer-title'>
                                OUR EXPERIENCE
                            </h3>
                            <ul className='footer-list'>
                                <li> <a  className='link' href="">Services</a></li>
                                <li>  <a  className='link' href="">Work</a></li>
                                <li> <a  className='link' href="">News</a></li>
                            </ul>

                        </div>


                    </div>
                    <p className='copiable' >© All rights reserved. Made with <Heart/> by Createx Studio </p>
                </div>

            </footer>
        </>
    );
};

export default Footer;
