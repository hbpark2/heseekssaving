import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position:fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: 100vh;
  background-color: #aa9;
  background-color: rgb(247, 241, 229);
  padding:20px;
  box-sizing: border-box;
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

const BottomModal = ({ children, onLayerClose }) => (
	<>
		<Container>
			{children}
		</Container>
		<Layer onClick={onLayerClose} />
	</>
);

BottomModal.propTypes = {
	children: PropTypes.node,
	onLayerClose: PropTypes.func,
};

export default BottomModal;
