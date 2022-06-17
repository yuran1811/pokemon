import { PaginationButtonProps } from 'shared/types';
import { useSwiper } from 'swiper/react';
import { FC, HTMLProps } from 'react';

export const PaginationButton: FC<PaginationButtonProps & HTMLProps<HTMLButtonElement>> = (props) => {
	const { cpnRef, type, ...others } = props;

	const swiper = useSwiper();

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
