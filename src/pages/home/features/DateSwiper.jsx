import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { getToday } from 'utils';

const SwiperButtonWrap = styled.div`
  position:absolute;
  z-index:10;
  top:50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: 500ms;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .btn_prev{margin-left:24px;}
  .btn_next{margin-right:24px;}
`;

const Container = styled.div`
  position:relative;
  &:hover ${SwiperButtonWrap}{
    opacity: 1;
  }
`;

const ShowSlide = styled.div`
  overflow:hidden;
  white-space:nowrap;
`;

const InnerSlide = styled.div`
  width: 100%;
  height: 300px;
  transition: 500ms;
`;

const PageSlide = styled.div`
  display:inline-block;
  width:100%;
  height: 100%;
  background-color: #fee;
`;

const list = [1, 2, 3];
const DateSwiper = () => {
	const today = getToday();
	const [slideIndex, setSlideIndex] = useState(0);
	const requestTotal = useMemo(() => list.length - 1, [list]);

	const onClickArrowBtn = direction => {
		if (direction === 'PREV') {
			setSlideIndex(prev => (prev === 0 ? requestTotal : prev - 1));
		}
		if (direction === 'NEXT') {
			setSlideIndex(prev => (prev === requestTotal ? 0 : prev + 1));
		}
	};

	const onClickIndicator = idx => {
		setSlideIndex(idx);
	};
	return (
		<Container>
			<ShowSlide>
				<InnerSlide style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
					<PageSlide>1</PageSlide>
					<PageSlide>2</PageSlide>
					<PageSlide>3</PageSlide>
				</InnerSlide>
			</ShowSlide>
			<SwiperButtonWrap>
				<button
					type="button"
					className="btn_prev"
					onClick={() => onClickArrowBtn('PREV')}
				>
					<span className="ico_comm ico_arr_prev2">이전 페이지로 이동</span>
				</button>
				<button
					type="button"
					className="btn_next"
					onClick={() => onClickArrowBtn('NEXT')}
				>
					<span className="ico_comm ico_arr_next2">다음 페이지로 이동</span>
				</button>
			</SwiperButtonWrap>
		</Container>
	);
};

export default DateSwiper;
