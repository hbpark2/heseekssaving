import { createSlice } from '@reduxjs/toolkit';

const PAYMENT_TYPE_LIST = [
	{
		id: '1',
		text: '선택1',
	},
	{
		id: '2',
		text: '선택2',
	},
	{
		id: '3',
		text: '선택3',
	},
];
const PAYMENT_WAY_LIST = [
	{
		id: '1',
		text: '카드',
	},
	{
		id: '2',
		text: '현금',
	},
	{
		id: '3',
		text: '선택3',
	},
];

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: {
		paymentList: JSON.parse(localStorage.getItem('PAYMENT_LIST')) || [],
		paymentTypeList: [],
		paymentWayList: [],
		error: {
			paymentTypeListErr: null,
			paymentWayListErr: null,
		},
		loading: {
			paymentTypeListLoading: false,
			paymentWayList: false,
		},
	},
	reducers: {
		initOptions: (state, _) => {
			const initPaymentType = localStorage.getItem('payment_type_list');
			const initPaymentWay = localStorage.getItem('payment_type_way');
			state.paymentTypeList = initPaymentType || PAYMENT_TYPE_LIST;
			state.paymentWayList = initPaymentWay || PAYMENT_WAY_LIST;
		},
		addList: (state, action) => {
			const paymentList = JSON.parse(localStorage.getItem('PAYMENT_LIST')) || [];
			paymentList.push(action.payload);
			const newArr = paymentList.map((item, index) => ({
				...item,
				id: index,
			}));
			localStorage.setItem('PAYMENT_LIST', JSON.stringify(newArr));
		},
		removeList: (state, action) => {
			const paymentList = JSON.parse(localStorage.getItem('PAYMENT_LIST')) || [];
			const newArr = paymentList.filter(item => item.id !== action.payload);
			localStorage.setItem('PAYMENT_LIST', JSON.stringify(newArr));
		},
		getPaymentList: (state, action) => {
			state.paymentList = JSON.parse(localStorage.getItem('PAYMENT_LIST')) || [];
		},

	},
});

export const { initOptions, addList, removeList, getPaymentList } = dashboardSlice.actions;

export default dashboardSlice.reducer;
