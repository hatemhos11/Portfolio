import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image, { StaticImageData } from 'next/image';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

const ProjectSlider = () => {
	// Keen Slider Config
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider(
		{
			loop: true,
			initial: 3,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
		},
		[
			(slider) => {
				let timeout: any;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 2000);
				}
				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			},
		]
	);
    
    return (
        <>
            <div ref={sliderRef} className='keen-slider projects__cards'>
                    <Project src={project1} alt='project2'/>
                    <Project src={project2} alt='project2'/>
                    <Project src={project3} alt='project3'/>
                    <Project src={project4} alt='project4'/>
            </div>

            {/* Buttons ( -- Next -- || -- Previous) */}
            <div className='projects__buttons'>
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

export default ProjectSlider;



function Arrow(props: any) {
	const disabeld = props.disabled ? ' arrow--disabled' : '';
	return (
		<button
			onClick={props.onClick}
			className={`button projects__button projects__button__left' arrow 
                ${
					props.left
						? 'arrow--left projects__button__left'
						: 'arrow--right projects__button__right'
				} ${disabeld}`}
		>
			{props.left ? 'Prev' : 'Next'}
		</button>
	);
}


type projectType = {
	src: StaticImageData, 
	alt: string
}
const Project =({src, alt}:projectType)=>{
	return(
		<div className='projects__project keen-slider__slide'>
			<Image src={src} width={800} height={300} alt={alt} />
		</div>
	)
}