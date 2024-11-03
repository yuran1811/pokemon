import { FC, HTMLProps } from 'react';
import { useNavigate } from 'react-router-dom';

const beforeStyle = `before:content-[""] before:absolute before:left-6 before:right-[unset] before:w-[50%] before:h-[0.7rem] before:rounded-[1rem] before:bg-ctbackground before:rotate-[-45deg] before:top-[1.5rem] before:bg-white before:left-[-1rem]`;
const afterStyle = `after:content-[""] after:absolute after:left-6 after:right-[unset] after:w-[50%] after:h-[0.7rem] after:rounded-[1rem] after:bg-ctbackground after:rotate-45 after:bottom-[1.5rem] after:bg-white after:left-[-1rem]`;
const hoverStyle = `hover:translate-x-[-0.5rem] transition-all`;

export const BackIcon: FC<HTMLProps<HTMLDivElement>> = () => {
  const back = useNavigate();

  return (
    <div
      className={`cursor-pointer flex justify-start items-center relative my-[1rem] mx-auto w-[5rem] h-[5rem] ${beforeStyle} ${afterStyle} ${hoverStyle}`}
      onClick={() => back(-1)}
    >
      <span className='w-full h-[0.6rem] rounded-[1rem] bg-white' />
    </div>
  );
};
