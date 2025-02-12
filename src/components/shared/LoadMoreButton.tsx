import { FC, HTMLProps } from "react";

export const LoadMoreButton: FC<HTMLProps<HTMLButtonElement>> = ({
  children,
  onClick,
}) => (
  <button
    className="text-ctbackground bg-ctcolor hover:text-ctwhite hover:bg-ctloadmorebg relative m-[2rem] cursor-pointer rounded-3xl border-none px-8 py-4 text-4xl transition-all duration-200 ease-in-out"
    onClick={onClick}
  >
    {children}
  </button>
);
