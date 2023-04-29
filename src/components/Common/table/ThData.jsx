import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';

const ThData = ({ item, onSorting, isAllCheck, onAllCheck }) => {
	const [orderState, setOrderState] = useState({
		className: 'ico_sort', // ico_sort, ico_sort_u, ico_sort_d
		text: '기본정렬', // 기본정렬, 오름차순, 내림차순
	});

	const handleSortBtn = itemId => {
		const newState = {};
		let order = '';

		switch (orderState.text) {
		case '기본정렬':
			newState.className = 'ico_sort_u';
			newState.text = '오름차순';
			order = 'asc';
			break;
		case '오름차순':
			newState.className = 'ico_sort_d';
			newState.text = '내림차순';
			order = 'desc';
			break;
		case '내림차순':
			newState.className = 'ico_sort';
			newState.text = '기본정렬';
			order = '';
			break;
		default:
			break;
		}
		setOrderState(newState);
		onSorting(itemId, order);
	};

	return (
		<th
			scope="col"
			key={item.id}
			style={{ width: item.width }}
		>
			{item.id === 'checkbox'
				? <Checkbox
					id="all"
					checked={isAllCheck}
					onChange={onAllCheck} />
				: item.isSort
					? <div className="cell_item">
						<span className="txt_th">
							{item.text}
							<span className={classNames('ico_comm', { [orderState.className]: orderState?.className })}>{orderState.text}</span>
						</span>
						<button
							type="button"
							className="btn_order"
							onClick={() => handleSortBtn(item.id)}
						>정렬</button>
					</div>
					: item.text
			}
		</th>
	);
};

ThData.propTypes = {
	item: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
	]),
	onSorting: PropTypes.func,
	isAllCheck: PropTypes.bool,
	onAllCheck: PropTypes.func,
};

export default ThData;
