import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

const Container = styled.div`
`;
const MainContent = styled.main`
  width: 90%;
  max-width: 800px;
  min-width: 340px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 80px;
  /* background-color: rgba(0,0,0,0.5); */
`;

const Layout = ({ children }) => {
	const a = '';
	return (
		<Container>
			<Header />
			<MainContent>
				{children}
			</MainContent>
			<Footer/>
		</Container>
	);
};

Layout.propTypes = { children: PropTypes.node };

export default Layout;
