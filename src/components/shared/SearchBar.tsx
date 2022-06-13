import { FC, HTMLProps } from 'react';

const SearchBar: FC<HTMLProps<HTMLInputElement>> = (props) => (
	<div className='flexcenter w-full'>
		<input
			className='text-[3rem] bg-ctwhite w-[60%] max-w-[50rem] min-w-[22rem] px-[2.5rem] py-[1rem] outline-none border-[0.8rem] border-solid border-nofill rounded-[3rem] transition-all duration-300 ease-in-out focus:border-ctcolor'
			{...props}
		/>
	</div>
);

export default SearchBar;
