import Link from 'next/link';
import {TfiCup} from 'react-icons/tfi'

const ProjectsResume = () => {
	return (
		<div className='projectsResume'>
			<h3 className="resume--title">Projects</h3>
			<div className='projectsResume__projects'>
				<Project gitLink='' demoLink='' title="Facebook Clone"  />
				<Project gitLink='' demoLink='' title="Facebook Clone"   />
				<Project gitLink='' demoLink='' title="E-Commerce"   />
				<Project gitLink='' demoLink='' title="Todo List"   />
				<Project gitLink='' demoLink='' title="Marvel Football Academy"   />
			</div>
		</div>
	);
};

export default ProjectsResume;

type projectPropsType = {
	title: string 
	demoLink: string
	gitLink: string
}

const Project = ({title , demoLink, gitLink}: projectPropsType)=>{
	return (
		<div className='projectsResume__project'>
			<div className='projectsResume__project--name'><TfiCup/>{title}</div>
			<Link className='projectsResume__project--link' href={demoLink}>Demo</Link>
			<Link className='projectsResume__project--link' href={gitLink}>Github</Link>
		</div>
	)
}