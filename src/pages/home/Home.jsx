import Button from 'components/Common/Button';
import Table from 'components/Common/table/Table';
import { MONTHLY_TABLE_HEAD } from 'constant';
import FormModal from 'pages/home/modal/FormModal';
import { useCallback, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPaymentList, removeList } from 'store/dashboardSlice/dashboardSlice';
import styled from 'styled-components';
import { formatMoney } from 'utils';

const Container = styled.div`
  padding: 20px 0;
`;

const Content = styled.div``;

const AddButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  color: #F7F1E5;
  box-shadow: 3px 6px 12px rgba(0,0,0,0.1), -3px -6px 12px rgba(0,0,0,0.1);
`;

const ChipsWrap = styled.div`
  display: flex;
`;

const Chip = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 80px; 
  height: 40px;
  color: ${props => (!props.current ? '#333' : '#f5ece4')}; 
  background-color: ${props => (props.current ? '#333' : '#f5ece4')};
  box-shadow: 3px 4px 4px rgba(0,0,0,0.1);
  border-radius: 5px;
  margin: 0 10px 20px;
  transition: .5s all;
`;

const RemoveButton = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 50px; 
  height: 30px;
  background-color: #333;
  color:#ECE3D3;
  border-radius: 5px;
`;

const Home = () => {
	const dispatch = useDispatch();
	const paymentList = useSelector(state => state.dashboard.paymentList);
	const [modalState, setModalState] = useState(false);
	const [calculateType, setCalculateType] = useState('Monthly');

	const onChangeCalculateType = type => {
		setCalculateType(type);
	};

	const openModal = () => {
		setModalState(true);
	};

	const onRemoveItem = useCallback(id => {
		dispatch(removeList(id));
		dispatch(getPaymentList());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getPaymentList());
	}, [dispatch, modalState]);

	return (
		<Container>
			<Content>
				<ChipsWrap>
					<Chip
						current={calculateType === 'Monthly'}
						onClick={() => onChangeCalculateType('Monthly')}>Monthly</Chip>
					<Chip
						current={calculateType === 'Weekly'}
						onClick={() => onChangeCalculateType('Weekly')}>Weekly</Chip>
				</ChipsWrap>

				<Table
					headList={MONTHLY_TABLE_HEAD}
				>
					{paymentList.map((item, index) => (
						<tr key={`paymentItem_${index}`}>
							<td>{item.payment_type.text}</td>
							<td>{item.payment_way.text}</td>
							<td>{formatMoney(item.money)} ₩</td>
							<td>
								<RemoveButton
									type="button"
									onClick={() => onRemoveItem(item.id)}>삭제</RemoveButton>
							</td>
						</tr>))}
				</Table>
			</Content>

			<AddButton onClick={openModal}>추가</AddButton>

			{modalState && (
				<FormModal onClose={() => setModalState(false)} />
			)}
		</Container>
	);
};

export default Home;
