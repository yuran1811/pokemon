import { PaginationProps } from 'shared/types';
import { PaginationBadge, PaginationButton } from 'components/shared';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';

export const Pagination: FC<PaginationProps> = (props) => {
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
			slideToClickedSlide: true,
			navigation: {
				prevEl: prevBtn.current,
				nextEl: nextBtn.current,
			},
			breakpoints: {
				1024: { slidesPerView: 10 },
				768: { slidesPerView: 8 },
				640: { slidesPerView: 6 },
				520: { slidesPerView: 5 },
				480: { slidesPerView: 4 },
				0: { slidesPerView: 3 },
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
	}, [badgeIdx]);

	return (
		<div className='flexcenter justify-between w-full sm:w-[70%] p-[0.5rem] md:p-[2rem]'>
			<div className='flex justify-start items-center mx-8 w-full overflow-x-auto'>
				<Swiper {...swiperOptions} className='flex items-center w-full lg:w-[70%]'>
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
