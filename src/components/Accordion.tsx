import React, { FC, useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import { ReactComponent as Minus } from '../assets/multicolor/Minus.svg'
import { ReactComponent as Plus } from '../assets/multicolor/Plus.svg'

interface IAccordion {
	title: string
	content: string
}
const Accordion: FC<IAccordion> = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false)
	return (
		<div  className='accordion-wrapper'>
			<div
				onClick={() => setIsActive(!isActive)}
				className='accordion-wrapper__title'
			>

                <div  className='accordion-wrapper__svg'>{isActive?<Minus/>:<Plus/>}  </div>
				{title}
			</div>

			<CSSTransition in={isActive} timeout={300} classNames='my-node' unmountOnExit>
				<div className='accordion-wrapper__content'>{content}</div>
			</CSSTransition>
			{/*{isActive ? (*/}



		</div>
	)
}

export default Accordion
