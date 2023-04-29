import classNames from 'classnames';
import useOutsideClick from 'hooks/useOutsideClick';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  .box_frm{
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListWrap = styled.ul`
  position: absolute;
  top: 44px;
  display: flex;
  flex-wrap: wrap;
  background-color:#aa9;
  li{
    padding: 10px;
  }
`;

const Select = ({
	label, isEssential, value, setValue, placeholder,
	isSmallType, onFocus, disabled, name, control, suggestList, isError,
}) => {
	const selectValue = useWatch({
		control,
		name,
	});

	const selectRef = useRef(null);
	const [isFocus, setIsFocus] = useState(false);

	const handleClickItem = selectVal => {
		setValue(name, selectVal);
		setIsFocus(false);
	};

	const handleFocus = () => {
		setIsFocus(true);
		onFocus && onFocus();
	};

	useOutsideClick({
		ref: selectRef,
		isFocus,
		setIsFocus,
	});

	return (
		<Container className={classNames('inp_comm type_select', { type_small: isSmallType })}>
			{label && (
				<span className="lab_frm">
					{label}&nbsp;
					{isEssential && <em className="ico_point">필수작성</em>}
				</span>
			)}
			<div className="box_frm list_open">
				<strong className="screen_out">선택상자</strong>
				<Link
					className={classNames('link_selected', {
						selected: selectValue.id,
						active: isFocus,
						disabled,
						error: isError,
					})}
					onClick={handleFocus}
				>
					<span className="ico_comm ico_arr_d2"></span>
					{selectValue.text || placeholder}
				</Link>
				<strong className="screen_out">선택옵션</strong>
				{isFocus && (
					<ListWrap
						className="list_item"
						ref={selectRef}
					>
						{
							suggestList.length > 0
								? suggestList.map(item => (
									<li
										key={item.id}
										className={classNames({ selected: value === item.id })}>
										<Link
											className="link_item"
											onClick={() => handleClickItem(item)}>
											{item.text}
										</Link>
									</li>
								))
								: <li>
									<span className="item_none">None</span>
								</li>
						}
					</ListWrap>
				)}
			</div>
		</Container>
	);
};

Select.propTypes = {
	isSmallType: PropTypes.bool,
	value: PropTypes.string,
	setValue: PropTypes.func,
	onFocus: PropTypes.func,
	disabled: PropTypes.bool,
	control: PropTypes.object,
	name: PropTypes.string,
	label: PropTypes.string,
	isEssential: PropTypes.bool,
	placeholder: PropTypes.string,
	suggestList: PropTypes.array,
	isError: PropTypes.bool,
};

export default Select;
