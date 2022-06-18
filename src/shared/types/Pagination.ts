import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export interface PaginationProps {
	badgesLength: number;
	localPageIdx: number;
	setPageIdx?: Dispatch<SetStateAction<number>>;
}

export interface PaginationBadgeProps {
	idx: string | number;
	setBadgeIdx: Dispatch<SetStateAction<number>>;
}

export interface PaginationButtonProps {
	type: string;
	localPageIdx?: number;
	cpnRef?: MutableRefObject<any>;
}
