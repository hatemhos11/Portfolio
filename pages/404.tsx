import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';
const errorPage = () => {
	const {back} = useRouter()
	return (
		<div className='notFoundPage '>
			<div className='notFoundPage__container container'>
				<div className='notFoundPage__oops'>Oops!</div>
				<div className='notFoundPage__code'>404 - PAGE NOT FOUND</div>
				<p className='notFoundPage__desc'>
					The page you are looking for might have been removed had its
					name changed or is temporarily unavailable.
				</p>
				<div className='notFoundPage__buttons'>
					<Link href='/'>
						<button className='notFoundPage__button button '>
							<FaHome
								className='notFoundPage__button--HomeIcon'
								size={17}
							/>
							Home
						</button>
					</Link>
					<div onClick={back}>
						<button className='notFoundPage__button button '>
							<IoArrowBackCircle
								className='notFoundPage__button--HomeIcon'
								size={17}
							/>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default errorPage;
