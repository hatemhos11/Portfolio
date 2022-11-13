import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { MdRestaurantMenu } from 'react-icons/md';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const headerRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				headerRef.current?.classList.add('fixed');
			} else {
				headerRef.current?.classList.remove('fixed');
			}
		});
	}, []);

	return (
		<>
			{isOpen && (
				<div className='overlay' onClick={() => setIsOpen(false)}></div>
			)}
			<header ref={headerRef} className='header'>
				<nav className='header__nav container'>
					<Link href='/'>
						<Image
							src='/logo.svg'
							alt='Hatem'
							width={80}
							height={80}
							draggable={false}
							className='header__logo'
						/>
					</Link>
					<ul className={`header__list ${isOpen ? '' : 'close'}`}>
						<div className='header__list__links'>
							<NavLink setIsOpen={setIsOpen} href='/' title='Home' />
							<NavLink setIsOpen={setIsOpen} href='/projects' title='Projects' />
							<NavLink setIsOpen={setIsOpen} href='/resume' title='Resume' />
							<NavLink setIsOpen={setIsOpen} href='/contact' title='Contact' />
						</div>

						<button className='button header__list__button'>
							<a href='mailto:hatemhosni00@gmail.com'>Hire Me</a>
						</button>
					</ul>

					<div className='header__toggle-icon'>
						{isOpen ? (
							<MdRestaurantMenu
								color='var(--main-color)'
								onClick={() => setIsOpen(false)}
								className='header__menuIcon'
								size={40}
							/>
						) : (
							<RiMenu4Line
								color='var(--main-color)'
								onClick={() => setIsOpen(true)}
								className='header__menuIcon'
								size={40}
							/>
						)}
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;


type navLinkType= { href: string, title: string, setIsOpen:any}

const NavLink = ({href,title, setIsOpen}: navLinkType) => {
	
	return (
		<Link className='header__list__link' href={href}>
			<li onClick={()=>setIsOpen(false)}>
				{title}
			</li>
		</Link>
	);
};
