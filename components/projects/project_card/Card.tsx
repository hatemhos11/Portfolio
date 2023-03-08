import Link from 'next/link';
import CardSlider from './CardSlider';

const Card = ({project}: any) => {
	return (
		<div className='project-p__card '>
			<div className='project-p__img'>
				<CardSlider images={project.img_src} />
			</div>
			<div className='project-p__btns'>
				<Link className='project-p__btn' href='sldkf'>
					CODE
				</Link>
				<Link className='project-p__btn' href='/lk'>
					DEMO
				</Link>
			</div>
		</div>
	);
};

export default Card;
