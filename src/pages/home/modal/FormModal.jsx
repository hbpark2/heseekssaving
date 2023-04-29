import PropTypes from 'prop-types';
import Modal from 'components/Common/Modal';
import PaymentListModal from 'components/form/PaymentListModal';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addList, initOptions } from 'store/dashboardSlice/dashboardSlice';
import styled from 'styled-components';

const Container = styled.div``;
const ListWrap = styled.div`
  min-width: 340px;
  width: 50%;
  margin: 0 auto;
  ul{
    display:flex;
  }
  li{
    /* border: 1px solid #aaa; */
    padding: 10px;
    &:not(:last-child){
    /* border-right: 0;  */
    }
  }
`;
const ListRow = styled.ul`
  font-size:16px;
`;

const Title = styled.li`
  width: 30%;
  font-weight: 500;
  color:#333;
`;
const Description = styled.li`
  width: 70%;
`;

const ButtonWrap = styled.div`
  margin-top: 20px;
`;

const Submit = styled.button`
  display: block;
  min-width: 200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color:#444;
  border: none;
  font-size: 24px;
  font-weight: 400;
  color: #F7F1E5;
  transition: 500ms;

  &:hover {
    background-color:#333;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: inherit;
  border:none;
  border-bottom: 2px solid #333;
`;

const PAYMENT_TYPE_LIST = [
	{
		id: '1',
		text: '분류 선택1',
	},
	{
		id: '2',
		text: '분류 선택2',
	},
	{
		id: '3',
		text: '분류 선택3',
	},
];
const PAYMENT_WAY_LIST = [
	{
		id: '1',
		text: '자산 선택1',
	},
	{
		id: '2',
		text: '자산 선택2',
	},
];

const FormModal = ({ onClose }) => {
	const dispatch = useDispatch();
	const info = useSelector(state => state.dashboard);

	useEffect(() => {
		dispatch(initOptions());
	}, [dispatch]);

	const { getValues, setValue, control } = useForm(
		{
			defaultValues: {
				money: '',
				payment_type: PAYMENT_TYPE_LIST[0],
				payment_way: PAYMENT_WAY_LIST[0],
			},
		},
	);
	const [modalState, setModalState] = useState({
		open: false,
		type: '',
	});
	const [paymentTypeList, setPaymentTypeList] = useState([]);
	const [paymentWayList, setPaymentWayList] = useState([]);

	const onFocusInput = type => {
		setModalState(prev => ({
			open: true,
			type,
		}));
	};

	const onLayerClose = () => {
		setModalState(() => ({
			open: false,
			type: '',
		}));
	};

	const onConfirm = () => {
		const values = getValues();
		dispatch(addList(values));
		onClose();
	};

	useEffect(() => {
		setPaymentTypeList(PAYMENT_TYPE_LIST);
		setPaymentWayList(PAYMENT_WAY_LIST);
	}, []);

	return (
		<Modal onLayerClose={onClose}>
			<button
				type="button"
				onClick={onClose}>뒤로</button>
			<Container>
				<ListWrap>
					<ListRow>
						<Title>금액</Title>
						<Description>
							<Input
								control={control}
								type="number"
								name="money"
								value={useWatch({
									control,
									name: 'money',
								}).text}
								onChange={e => setValue('money', e.target.value)}
							/>
						</Description>
					</ListRow>
					<ListRow>
						<Title>분류</Title>
						<Description>
							<Input
								control={control}
								type="text"
								name="payment_type"
								value={useWatch({
									control,
									name: 'payment_type',
								}).text}
								onClick={() => onFocusInput('PAYMENT_TYPE')}
								readOnly
							/>
						</Description>
					</ListRow>
					<ListRow>
						<Title>자산</Title>
						<Description>
							<Input
								control={control}
								type="text"
								name="payment_way"
								value={useWatch({
									control,
									name: 'payment_way',
								}).text}
								onClick={() => onFocusInput('PAYMENT_WAY')}
								readOnly
							/>
						</Description>
					</ListRow>

					<ButtonWrap>
						<Submit onClick={onConfirm}>Confirm</Submit>
					</ButtonWrap>
				</ListWrap>
				{modalState.type === 'PAYMENT_TYPE' && (
					<PaymentListModal
						onClose={onLayerClose}
						list={paymentTypeList}
						setPaymentList={setPaymentTypeList}
						setValue={setValue}
						type="payment_type"
					/>
				)}
				{modalState.type === 'PAYMENT_WAY' && (
					<PaymentListModal
						onClose={onLayerClose}
						list={paymentWayList}
						setPaymentList={setPaymentWayList}
						setValue={setValue}
						type="payment_way"
					/>
				)}
			</Container>
		</Modal>
	);
};

FormModal.propTypes = { onClose: PropTypes.func };

export default FormModal;
