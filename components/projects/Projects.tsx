import Link from 'next/link';
import ProjectSlider from './ProjectSlider'

const Projects = () => {


	return (
		<section className='projects container'>
			{/* Head (title & description) */}
			<div className='projects__head mb-6'>
				<h2 className='title projects__title mb-3'>
					Recent <span className='colored'>Projects</span>
				</h2>
				<p className='projects__desc pb-6'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Quas, odit harum laborum facilis vitae corporis iste dolorum
					non unde neque!
				</p>
			</div>

			{/* Projects Cards */}
            <ProjectSlider />
			<button className="button projects__button--more"><Link href='/projects'>More</Link></button>
		</section>
	);
};

export default Projects;