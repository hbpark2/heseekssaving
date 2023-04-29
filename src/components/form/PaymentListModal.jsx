import styled from 'styled-components';
import PropTypes from 'prop-types';
import BottomModal from 'components/Common/BottomModal';

const CloseButtonWrap = styled.button`
  position:absolute;
  top:10px;
  right:20px;
`;

const PaymentListModal = ({ list, setPaymentList, onClose, setValue, type }) => {
	const onLayerClose = () => {
		onClose();
	};
	const onClickItem = item => {
		setValue(type, item);
		onClose();
	};

	const onAddModalOpen = () => {

	};

	return (
		<BottomModal onLayerClose={onLayerClose}>
			<ul>
				{list?.length > 0 && list.map((item, index) => (
					<li key={`${type}_${index}`}>
						<button
							type="button"
							onClick={() => onClickItem(item)}>{item.text}</button>
					</li>
				))}
				<li>
					<button
						type="button"
						onClick={() => onAddModalOpen()}>추가</button>
				</li>
			</ul>
			<CloseButtonWrap
				type="button"
				onClick={() => onLayerClose()}>
            닫기
			</CloseButtonWrap>
		</BottomModal>
	);
};

PaymentListModal.propTypes = {
	list: PropTypes.array,
	onClose: PropTypes.func,
	setValue: PropTypes.func,
	setPaymentList: PropTypes.func,
	type: PropTypes.string,
};

export default PaymentListModal;
