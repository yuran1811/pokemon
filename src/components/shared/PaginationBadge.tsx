import { FC, HTMLProps } from 'react';
import { useSwiperSlide } from 'swiper/react';

import { paginationBadge } from '@/utils';
import { PaginationBadgeProps } from '@/shared/types';

export const PaginationBadge: FC<PaginationBadgeProps & HTMLProps<HTMLDivElement>> = ({ idx, setBadgeIdx }) => {
  const { isActive } = useSwiperSlide();
  const activeClass = isActive ? 'text-ctbackground bg-ctcolor' : 'text-ctcolor bg-ctbackground';

  return (
    <div className={`${paginationBadge} ${activeClass} font-bold text-[2.6rem]`} onClick={() => setBadgeIdx(+idx)}>
      {idx}
    </div>
  );
};
