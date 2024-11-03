import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { PaginationBadge, PaginationButton } from '@/components/shared';
import { PaginationProps } from '@/shared/types';

export const Pagination: FC<PaginationProps> = (props) => {
  const { badgesLength, localPageIdx } = props;

  const prevBtn = useRef<HTMLDivElement>(null);
  const nextBtn = useRef<HTMLDivElement>(null);
  const [badgeIdx, setBadgeIdx] = useState(localPageIdx - 1);
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
      onSlideChange: ({ activeIndex }) => setBadgeIdx(activeIndex + 1),
    }),
    []
  );

  useEffect(() => {
    geneBadges();
  }, [badgesLength]);

  useEffect(() => {
    console.log(badgeIdx);
    props?.setPageIdx && props.setPageIdx(badgeIdx);
  }, [badgeIdx]);

  return (
    <div className='flexcenter justify-between w-full sm:w-[70%] p-[0.5rem] md:p-[2rem]'>
      <div className='flex justify-start items-center mx-8 w-full overflow-x-auto'>
        <Swiper {...swiperOptions} className='flex items-center w-full lg:w-[70%]'>
          <PaginationButton cpnRef={prevBtn} type='prev' />

          {[...badges].map((idx: number) => (
            <SwiperSlide key={idx}>
              <PaginationBadge idx={idx} setBadgeIdx={setBadgeIdx} />
            </SwiperSlide>
          ))}

          <PaginationButton cpnRef={nextBtn} type='next' localPageIdx={localPageIdx} />
        </Swiper>
      </div>
    </div>
  );
};
