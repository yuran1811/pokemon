import { FC, HTMLProps } from 'react';

export const SearchBar: FC<HTMLProps<HTMLInputElement>> = (props) => (
  <div className='flexcenter w-full'>
    <input
      {...props}
      className='text-[2.5rem] bg-ctwhite w-[60%] max-w-[50rem] min-w-[22rem] px-[2rem] py-[1rem] outline-none border-[0.8rem] border-solid border-nofill rounded-[3rem] transition-all duration-300 ease-in-out focus:border-ctcolor'
    />
  </div>
);
