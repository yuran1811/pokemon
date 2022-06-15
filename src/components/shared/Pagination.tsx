import { PaginationProps } from 'shared/types';
import PaginationBadge from './PaginationBadge';
import PaginationButton from './PaginationButton';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';

const Paginations: FC<PaginationProps> = (props) => {
	const { badgesLength } = props;

	const prevBtn = useRef(null);
	const nextBtn = useRef(null);
	const [badgeIdx, setBadgeIdx] = useState(1);
	const [badges, setBadges] = useState<Set<number>>(new Set());

	const geneBadges = useCallback(() => {
		for (let i = 1; i <= badgesLength; i++) setBadges((badges) => badges.add(i));
	}, [badgesLength]);

	const swiperOptions = useMemo<SwiperProps>(
		() => ({
			modules: [Navigation, A11y],
			centeredSlides: true,
			slidesPerView: 10,
			spaceBetween: 100,
			slideToClickedSlide: true,
			navigation: {
				prevEl: prevBtn.current,
				nextEl: nextBtn.current,
			},
			breakpoints: {
				1120: {
					slidesPerView: 9,
					spaceBetween: 90,
				},
				800: {
					slidesPerView: 5,
					spaceBetween: 50,
				},
				480: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			onActiveIndexChange: ({ activeIndex }) => setBadgeIdx(activeIndex + 1),
		}),
		[]
	);

	useEffect(() => {
		geneBadges();
	}, [badgesLength]);

	useEffect(() => {
		props?.setPageIdx && props.setPageIdx(badgeIdx);
	}, [badgeIdx, badgesLength]);

	return (
		<div className='flexcenter justify-between w-[70%] p-[2rem]'>
			<div className='flex justify-start items-center mx-8 w-full overflow-x-auto'>
				<Swiper {...swiperOptions}>
					<PaginationButton cpnRef={prevBtn} type='prev' />

					{[...badges].map((idx) => (
						<SwiperSlide key={idx}>
							<PaginationBadge idx={idx} setBadgeIdx={setBadgeIdx} />
						</SwiperSlide>
					))}

					<PaginationButton cpnRef={nextBtn} type='next' />
				</Swiper>
			</div>
		</div>
	);
};

export default Paginations;
