import Head from 'next/head';
import React, { ReactElement } from 'react';
import Education from '../components/resume/Education';
import HeadResume from '../components/resume/HeadResume';
import ProjectsResume from '../components/resume/ProjectsResume';
import SkillsResume from '../components/resume/SkillsResume';
import WorkHistory from '../components/resume/WorkHistory';

const Resume = ():ReactElement => {
	return (
		<>
			<Head>
				<title>Hatem&apos;s Portfolio | Resume</title>
				<meta name='description' content='Resume' />
			</Head>

			<div className='resume'>
				<div className='resume__container'>
					<HeadResume />
					<SkillsResume />
					{/* <WorkHistory />*/}
					<ProjectsResume />
					<Education />
				</div>
			</div>
		</>
	);
};

export default Resume;
