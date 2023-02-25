import React from 'react';
import Card from './project_card/Card';
import data from './data'

const ProjectCards = () => {
	console.log(data)
	return (
		<div className='project-p'>
            {data.map(d => {
                return <Card project={d}/>;
            })}
		</div>
	);
};

export default ProjectCards;
