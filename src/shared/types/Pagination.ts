import { Dispatch, SetStateAction } from 'react';

export interface PaginationProps {
	badgesLength: number;
	setPageIdx?: Dispatch<SetStateAction<number>>;
}

export interface PaginationBadgeProps {
	idx: string | number;
	isActive?: boolean;
	setBadgeIdx: Dispatch<SetStateAction<number>>;
}

export interface PaginationButtonProps {
	type: string;
	cpnRef?: React.MutableRefObject<any>;
}
