import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #333;
  
`;

const Button = ({ children, onClick }) => (
	<Container
		type="button"
		onClick={onClick}>{children}</Container>
);

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
};
export default Button;
