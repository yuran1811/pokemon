import { FC, HTMLProps } from 'react';

const LoadMoreButton: FC<HTMLProps<HTMLButtonElement>> = ({ children, onClick }) => (
	<button
		className='cursor-pointer relative text-[3.5rem] text-ctbackground px-8 py-[0.5rem] m-[5rem] border-none rounded-[1.5rem] bg-ctcolor transition-all duration-200 ease-in-out hover:text-ctwhite hover:bg-ctloadmorebg'
		onClick={onClick}
	>
		{children}
	</button>
);

export default LoadMoreButton;
