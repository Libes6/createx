import React, { FC } from 'react'
import {ReactComponent as LinkedIn} from "../assets/multicolor/person/team/Linked-In.svg";
import {ReactComponent as Facebook} from "../assets/multicolor/person/team/Facebook.svg";
import {ReactComponent as Twitter} from "../assets/multicolor/person/team/Twitter.svg";

interface Iperson{
	img:string
	title:string
	description:string
}
const CartPeople: FC<Iperson> = ({img,title,description}) => {
	return (
		<div className='team-cart'>
			<div className='team-cart__img'>
				<img src={img} alt='' />
				<div className='social'>
					<LinkedIn/>
					<Facebook/>
					<Twitter/>
				</div>
			</div>

			<p>{title}</p>
			<p>{description}</p>
		</div>
	)
}

export default CartPeople
