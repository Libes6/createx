import React, { FC } from 'react'
interface IbtnView {
	textButton: string
	text: string
}
const BtnView: FC<IbtnView> = ({ textButton, text }) => {
	return (
		<div className='btn-view'>
			<h3 className='title-small text-center'>{text}</h3>
			<button className='btn btn-primary'>{textButton}</button>
		</div>
	)
}

export default BtnView
