import { PaginationButtonProps } from 'shared/types';
import { FC } from 'react';

const PaginationButton: FC<PaginationButtonProps> = ({ type }) => <button className={`pagination-btn flexcenter ${type}`}></button>;

export default PaginationButton;
