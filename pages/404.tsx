import Link from 'next/link';
import React from 'react';

const errorPage = () => {
	return (
		<div className='notFoundPage '>
			<div className='notFoundPage__container container'>
				<div className="notFoundPage__oops">Oops!</div>
				<div className="notFoundPage__code">404 - PAGE NOT FOUND</div>
				<p className="notFoundPage__desc">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
				<Link href='/'>
					<button className='notFoundPage__button button'>GO TO HOME PAGE</button>
				</Link>
			</div>
		</div>
	);
};

export default errorPage;
