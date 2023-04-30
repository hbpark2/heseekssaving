import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Container = styled.div`
  position:fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: 400px;
  background-color: #aa9;
  background-color: rgb(247, 241, 229);
  padding:40px 20px 20px;
  box-sizing: border-box;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: -3px -3px 12px rgba(0,0,0,0.1);
  z-index: 9999;

`;

const Layer = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color:rgba(0,0,0,0.3);
  z-index: 999;
`;

const BottomModal = ({ children, customPosition, className, onLayerClose }) => {
	const position = customPosition || '.App';
	const el = document.querySelector(position);
	return ReactDOM.createPortal(<>
		<Container className={className}>
			{children}
		</Container>
		<Layer onClick={onLayerClose} />
	</>, el);
};

BottomModal.propTypes = {
	children: PropTypes.node,
	onLayerClose: PropTypes.func,
	customPosition: PropTypes.string,
	className: PropTypes.string,
};

export default BottomModal;
