import React, { useRef, useState, useEffect } from 'react'
import myvideo from '../assets/video.mp4'
import playImg from '../assets/multicolor/play.svg'
import stopImg from '../assets/multicolor/stop.svg'
import { Slider } from 'antd'
import { Icon24Fullscreen } from '@vkontakte/icons'
// import {ReactComponent as playI} from "../assets/multicolor/play.svg";

interface IPropsPlayer {
	classname: string
}
const useTimer = (delay: any) => {
	const [state, setState] = useState(0)
	const [stop, isSetStop] = useState(false)

	useEffect(() => {
		if (stop) return
		setTimeout(() => {
			setState((prev) => prev + 1)
		}, delay)
	}, [state])

	return [state, () => isSetStop(true)]
}
const VideoPlayer = () => {
	const [timer, stopTime] = useTimer(1000)
	const [screenVideo, setScreenVideo] = useState(false)

	const inputRef = useRef<HTMLVideoElement>(null)
	const [playStatus, setPlayStatus] = useState(false)
	const onPresVideo = () => {
		console.log(inputRef)
		if (playStatus == false) {
			setPlayStatus(true)
			inputRef?.current?.play()
		} else {
			setPlayStatus(false)
			inputRef?.current?.pause()
		}
	}

	const screenResize = () => {
		if (screenVideo) {
			setScreenVideo(false)
		} else {
			setScreenVideo(true)
		}
	}

	const onChange = (value: number) => {
		if (inputRef?.current?.currentTime != null) {
			inputRef.current.currentTime = value
		}
	}

	const onAfterChange = (value: number | [number, number]) => {
		if (inputRef?.current?.currentTime) {
		}
	}
	return (
		<div
			className={`video-block block-center ${
				screenVideo ? 'video-full' : ''
			}`}
		>
			{playStatus ? (
				<img
					src={stopImg}
					className='btn-video'
					onClick={() => onPresVideo()}
				></img>
			) : (
				<img
					src={playImg}
					className='btn-video'
					onClick={() => onPresVideo()}
				></img>
			)}

			<div className='header-video'>
				<div className='flex-wrapper'>
					Невероятные приключение лесоруба Васяна и его пса бима
				</div>
			</div>
			<div className='footer-video'>
				<Slider
					tooltip={{ formatter: (item) => item + ' сек' }}
					max={inputRef?.current?.duration}
					defaultValue={0}
					value={inputRef?.current?.currentTime}
					onChange={onChange}
					onAfterChange={onAfterChange}
				/>

				<div className='flex-wrapper'>
					<p className='light text-left'>
						<img src='' alt='' />
						0:{inputRef?.current?.currentTime! <= 10 ? '0' : ''}
						{inputRef?.current?.currentTime.toFixed(0)} / 0:
						{inputRef?.current?.duration.toFixed(0)}
					</p>

					<Icon24Fullscreen
						onClick={() => screenResize()}
						className='icon-outlined'
						width={25}
						height={25}
						color={'white'}
					/>
				</div>
			</div>
			{/*<button onClick={()=>onPresVideo()}>проверка</button>*/}
			<video
				onClick={() => onPresVideo()}
				ref={inputRef}
				className='about-section__video '
				src={myvideo}
				loop
				autoPlay={false}
			></video>
		</div>
	)
}

export default VideoPlayer
