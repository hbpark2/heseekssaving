import { useState } from 'react';
import { orderBy } from 'lodash';

const useSortTable = ({ originList, setViewList }) => {
	const [sortInfo, setSortInfo] = useState({
		colId: [],
		colOrderBy: [],
	});

	const handleSorting = (headId, order) => {
		const { colId, colOrderBy } = { ...sortInfo };
		const findItemIdx = colId.findIndex(item => item === headId);

		if (findItemIdx === -1) {
			colId.push(headId);
			colOrderBy.push(order);
		}

		if (findItemIdx !== -1 && order) {
			colOrderBy[findItemIdx] = order;
		}

		if (findItemIdx !== -1 && !order) {
			colId.splice(findItemIdx, 1);
			colOrderBy.splice(findItemIdx, 1);
		}

		const orderList = colId.length === 0 && colOrderBy.length === 0
			? originList
			: orderBy(originList, colId, colOrderBy);

		setViewList(orderList);
		setSortInfo({
			colId,
			colOrderBy,
		});
	};

	return handleSorting;
};

export default useSortTable;
