import { FC, HTMLProps } from "react";

const beforeStyle = `before:content-[""] before:absolute before:w-[3.2rem] before:h-[0.7rem] before:bg-ctgold before:rotate-45 before:rounded-[1rem]`;
const afterStyle = `after:content-[""] after:absolute after:w-[3.2rem] after:h-[0.7rem] after:bg-ctgold after:rotate-[-45deg] after:rounded-[1rem]`;

export const CloseIcon: FC<HTMLProps<HTMLDivElement>> = ({ onClick }) => (
  <div
    className={`flexcenter absolute top-4 right-4 z-2 h-[3.6rem] w-[3.6rem] cursor-pointer ${beforeStyle} ${afterStyle}`}
    onClick={onClick}
  />
);
