import moment from 'moment';

export const getToday = () => moment().format('YYYY-MM-DD');

export const formatMoney = money => {
	const str = money?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return str;
};
