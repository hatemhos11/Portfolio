import React from 'react';
import Card from './project_card/Card';
import data from './data'

const ProjectCards = () => {
	return (
		<div className='project-p'>
            {data.map(d => {
                return <Card key={d.id} project={d}/>;
            })}
		</div>
	);
};

export default ProjectCards;
