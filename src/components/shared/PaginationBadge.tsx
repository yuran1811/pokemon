import { paginationBadge } from 'utils';
import { PaginationBadgeProps } from 'shared/types';
import { useSwiperSlide } from 'swiper/react';
import { FC, HTMLProps } from 'react';

export const PaginationBadge: FC<PaginationBadgeProps & HTMLProps<HTMLDivElement>> = ({ idx, setBadgeIdx }) => {
	const { isActive } = useSwiperSlide();

	return (
		<div
			className={`${paginationBadge} ${isActive ? 'text-ctbackground bg-ctcolor' : 'hover:text-ctbackground hover:bg-ctcolor'}`}
			onClick={() => setBadgeIdx(+idx)}
		>
			<span className='font-bold text-[2.6rem]'>{idx}</span>
		</div>
	);
};
