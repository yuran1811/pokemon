import { PaginationButtonProps } from 'shared/types';
import { FC, HTMLProps, useEffect } from 'react';
import { useSwiper } from 'swiper/react';

export const PaginationButton: FC<PaginationButtonProps & HTMLProps<HTMLButtonElement>> = (props) => {
	const { cpnRef, type, localPageIdx, ...others } = props;

	const swiper = useSwiper();

	useEffect(() => {
		swiper.slideTo(localPageIdx ? localPageIdx - 1 : 1);
	}, []);

	return (
		<button
			{...others}
			ref={cpnRef}
			className={`pagination-btn flexcenter ${type}`}
			onClick={() => {
				type === 'prev' ? swiper.slidePrev() : swiper.slideNext();
			}}
		></button>
	);
};
