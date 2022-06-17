import { FC, HTMLProps } from 'react';

const beforeStyle = `before:content-[""] before:absolute before:w-[3.2rem] before:h-[0.4rem] before:bg-ctgold before:rotate-45`;
const afterStyle = `after:content-[""] after:absolute after:w-[3.2rem] after:h-[0.4rem] after:bg-ctgold after:rotate-[-45deg]`;

export const CloseIcon: FC<HTMLProps<HTMLDivElement>> = ({ onClick }) => (
	<div
		className={`flexcenter cursor-pointer absolute top-4 right-4 w-[3.6rem] h-[3.6rem] ${beforeStyle} ${afterStyle}`}
		onClick={onClick}
	></div>
);
