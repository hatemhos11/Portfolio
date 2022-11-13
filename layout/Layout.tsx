import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

type layoutType = { children: any; loading: boolean };

const Layout = ({ children, loading }: layoutType) => {
	return (
		<>
      <Loading loading={loading}/>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
