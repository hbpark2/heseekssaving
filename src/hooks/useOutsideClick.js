import { useEffect } from 'react';

const useOutsideClick = ({ ref, isFocus, setIsFocus, condition = true }) => {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target) && condition) {
				setIsFocus(false);
			}
		}
		if (isFocus) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, isFocus, setIsFocus, condition]);
};

export default useOutsideClick;
