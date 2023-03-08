import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image, { StaticImageData } from 'next/image';
import { project1 } from '../../../assets/projects';

const CardSlider = ({ images }: any) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});
	return (
		<>
			<div className='navigation-wrapper'>
				<div ref={sliderRef} className='keen-slider'>
					{images.map((IMG: StaticImageData) => (
						<Project src={IMG} alt='project-image' />
					))}
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e: any) =>
								e.stopPropagation() ||
								instanceRef.current?.prev()
							}
							disabled={currentSlide === 0}
						/>

						<Arrow
							onClick={(e: any) =>
								e.stopPropagation() ||
								instanceRef.current?.next()
							}
							disabled={
								currentSlide ===
								instanceRef.current.track.details.slides
									.length -
									1
							}
						/>
					</>
				)}
			</div>
		</>
	);
};

function Arrow(props: any) {
	const disabeld = props.disabled ? ' arrow--disabled' : '';
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? 'arrow--left' : 'arrow--right'
			} ${disabeld}`}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
		>
			{props.left && (
				<path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
			)}
			{!props.left && (
				<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
			)}
		</svg>
	);
}

type projectType = {
	src: StaticImageData;
	alt: string;
};
const Project = ({ src, alt }: projectType) => {
	return (
		<div className='keen-slider__slide'>
			<Image src={src.src} height={500} width={400} alt={alt} />
		</div>
	);
};

export default CardSlider;
