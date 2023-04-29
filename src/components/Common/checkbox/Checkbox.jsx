import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, checked, onChange, name, isLabel = false }) => (
	<div className="choice_comm type_check">
		<input
			type="checkbox"
			id={`choice_${id}`}
			className="inp_comm"
			autoComplete="off"
			onChange={onChange}
			checked={checked || false} />
		<label
			htmlFor={`choice_${id}`}
			className="lab_comm">
			{isLabel ? (
				<>
					<span className="ico_comm ico_check"></span>
					{name}
				</>
			) : (
				<>
					<span className="screen_out" >{name}</span>
					<span className="ico_comm ico_check"></span>
				</>
			)}

		</label>
	</div>
);

Checkbox.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	isLabel: PropTypes.bool,
};

export default Checkbox;
