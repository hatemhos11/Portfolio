import React from 'react';

const Loading = ({ loading }: { loading: boolean }) => {
	return (
		<>
			{loading && (
				<div className='loading'>
					<div className='loading__container'>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
					</div>
				</div>
			)}
		</>
	);
};

export default Loading;
