import Head from 'next/head';
import ContactComponent from '../components/contact/Contact';

const Contact = () => {
	return (
		<>
			<Head>
				<title>Hatem&apos;s Portfolio | Contact</title>
				<meta name='description' content='Frontend Developer' />
			</Head>

            <div>
            <ContactComponent />
            </div>
		</>
	);
};

export default Contact;
