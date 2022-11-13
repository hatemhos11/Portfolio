import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="footer container">
			{/* ------------- Logo ------------- */}
			<Image
				src='/logo.svg'
				alt="Hatem"
				width={100}
				height={100}
				className='footer__logo'
			/>
			{/* ------------- Pages ------------- */}
			<div className="footer__column">
				<h4 className="footer__column--head">Pages</h4>
				<Link className="footer__column--body" href='/'>Home</Link>
				<Link className="footer__column--body" href='/projects'>Projects</Link>
				<Link className="footer__column--body" href='/resume'>Resume</Link>
				<Link className="footer__column--body" href='/contact'>Contact</Link>
			</div>
			{/* ------------- Social Links ------------- */}
			<div className="footer__column">
				<h4 className="footer__column--head">Links</h4>
				<Link className="footer__column--body" target='_blank' href='https://www.linkedin.com/in/hatem-elsharkawy-150283212'>Linkedin</Link>
				<Link className="footer__column--body" target='_blank' href='https://github.com/hatemhos11'>Github</Link>
				<Link className="footer__column--body" href='/resume'>LeetCode</Link>
			</div>

		</footer>
	);
};

export default Footer;
