import PropTypes from 'prop-types';
import useSortTable from 'hooks/useSortTable';
import ThData from 'components/Common/table/ThData';
import styled from 'styled-components';

const TableCpt = styled.table`
  width:100%;
  border-spacing:0;
  border-collapse:collapse;
  word-break:break-all;
  table-layout:fixed;
  background-color: #ECE3D3;
  border-radius: 5px;
  box-shadow: 3px 6px 12px rgba(0,0,0,0.1);

  th{position:relative; padding:17px 0 18px 32px;text-align:left;font-size:14px;line-height:21px;box-sizing:border-box;}
  td{position:relative; height:48px;padding:16px 0 15px 32px;text-align:left;box-sizing:border-box; white-space: pre;}
  th,.tbl_comm td{border-bottom:1px solid rgba(34,34,34,0.1);}
  tbody tr{border-bottom: 1px solid rgba(34,34,34,0.1)}
  
  tbody tr.new td{background-color:#{$yellow-5};}
`;

const Table = ({ children, headList, originList, setViewList, isAllCheck, onAllCheck }) => {
	const handleClickSort = useSortTable({
		originList,
		setViewList,
	});

	return (
		<TableCpt>
			<colgroup>
				{headList.map(item => (
					<col
						key={`col_${item.id}`}
						style={{ width: item.width }}
					/>
				))}
			</colgroup>
			<thead>
				<tr>
					{headList.map(item => (
						<ThData
							key={item.id}
							item={item}
							onSorting={handleClickSort}
							isAllCheck={isAllCheck}
							onAllCheck={onAllCheck}
						/>
					))}
				</tr>
			</thead>
			<tbody>
				{children}
			</tbody>
		</TableCpt>
	);
};

Table.propTypes = {
	children: PropTypes.node,
	headList: PropTypes.array,
	originList: PropTypes.array,
	setViewList: PropTypes.func,
	isAllCheck: PropTypes.bool,
	onAllCheck: PropTypes.func,
};

export default Table;
