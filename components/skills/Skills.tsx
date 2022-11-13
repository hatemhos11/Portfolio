import { useState } from 'react';
import SkillCard from './SkillCard';
import {
	reactIcon,
	nextIcon,
	jsIcon,
	reduxIcon,
	htmlIcon,
	cssIcon,
	nodeIcon,
	psIcon,
	muiIcon,
	sassIcon,
	bootstrapIcon,
	tailwindIcon,
} from '../../assets/svg/skills';

const Skills = () => {
	const [isExpand, setIsExpand] = useState(false);

	return (
		<section className='skills odd'>
			<div className='container'>
				<div className='mb-6 skills__head'>
					<h5>
						My <span className='main-color'>skills</span>
					</h5>
					<h2 className='title mt-1'>What I Do?</h2>
				</div>

				<div className='skills__cards'>
					<SkillCard src={reactIcon} title='React' />
					<SkillCard src={nextIcon} title='Next.js' />
					<SkillCard src={nodeIcon} title='Node.js' />
					<SkillCard src={reduxIcon} title='Redux && RTK' />
					<SkillCard src={psIcon} title='Problem Solving' />
					<SkillCard src={muiIcon} title='MUI' />
					{isExpand && (
						<>
							<SkillCard src={sassIcon} title='SASS' />
							<SkillCard src={bootstrapIcon} title='Bootstrap' />
							<SkillCard src={tailwindIcon} title='tailwind' />
							<SkillCard src={cssIcon} title='CSS' />
							<SkillCard src={htmlIcon} title='HTML' />
							<SkillCard src={jsIcon} title='Javascript' />
						</>
					)}
				</div>

				{!isExpand && (
					<>
						<button
							onClick={() => setIsExpand(true)}
							className='button skills__button'
						>
							More
						</button>
					</>
				)}
			</div>
		</section>
	);
};

export default Skills;
