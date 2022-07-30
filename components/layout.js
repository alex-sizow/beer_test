import Header from './header/index';

const Layout = ({ children }) => {
	return (
		<div>
			<Header></Header>
			<hr />

			{children}
			<hr />
		</div>
	);
};

export default Layout;
