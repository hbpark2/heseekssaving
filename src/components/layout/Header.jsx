import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display:flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #F7F1E5;
  box-shadow: 3px 3px 4px rgba(0,0,0,0.3);
  z-index: 999;
`;

const Logo = styled.h1`
padding: 10px;

`;

const Header = () => (
	<Container>
		<Logo>
      HESEEKSSAVING
		</Logo>
	</Container>
);

export default Header;
