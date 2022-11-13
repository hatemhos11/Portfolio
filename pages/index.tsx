import Head from 'next/head';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';

export default function Home() {
	return (
		<>
			<Head>
				<title>Hatem&apos;s Portfolio | Home</title>
				<meta name='description' content='Frontend Developer' />
			</Head>

			<main>
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
