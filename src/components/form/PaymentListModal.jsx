import styled from 'styled-components';
import PropTypes from 'prop-types';
import BottomModal from 'components/Common/BottomModal';
import { useState } from 'react';

const CloseButtonWrap = styled.button`
  position:absolute;
  top:10px;
  right:20px;
`;

const OptionWrap = styled.ul`
  display: grid;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; 
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 10px;
  li{
    display: flex;
    justify-content: center;
  }
`;

const OptionChip = styled.button`
  padding: 10px;
  min-width: 100px;
  height: 60px;
  margin: 5px;
  background-color: #ECE3D3;
  border-radius: 10px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  background-color: inherit;
  border:none;
  border-bottom: 1px dashed #333;
  padding: 10px;
  background-color:#ECE3D3;
  box-sizing: border-box;
`;

const AddOptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color:#ECE3D3;
  border-radius: 10px;
  box-shadow: 3px 6px 12px rgba(0,0,0,0.1);
`;

const PaymentListModal = ({ list, setPaymentList, onClose, setValue, type }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [optionText, setOptionText] = useState('');
	const onLayerClose = () => {
		onClose();
	};

	const onClickItem = item => {
		setValue(type, item);
		onClose();
	};

	const onAddModalOpen = () => {
		setModalOpen(true);
	};
	const onAddModalClose = () => {
		setModalOpen(false);
	};

	return (
		<BottomModal
			onLayerClose={onLayerClose}
			customPosition=".form_modal"
			className="category_modal">
			<OptionWrap>
				{list?.length > 0 && list.map((item, index) => (
					<li key={`${type}_${index}`}>
						<OptionChip
							type="button"
							onClick={() => onClickItem(item)}>{item.text}</OptionChip>
					</li>
				))}
				<li>
					<OptionChip
						type="button"
						onClick={() => onAddModalOpen()}>추가</OptionChip>
				</li>
			</OptionWrap>
			<CloseButtonWrap
				type="button"
				onClick={() => onLayerClose()}>
            닫기
			</CloseButtonWrap>
			{modalOpen && (
				<BottomModal
					onLayerClose={onAddModalClose}
					customPosition=".category_modal">
					<Input
						type="text"
						name="money"
						value={optionText}
						placeholder="분류 이름"
						onChange={e => setOptionText(e.target.value)}
					/>
					<AddOptionButton type="button">
              저장
					</AddOptionButton>
					<CloseButtonWrap
						type="button"
						onClick={() => onAddModalClose()}>
            닫기
					</CloseButtonWrap>
				</BottomModal>
			)}

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
