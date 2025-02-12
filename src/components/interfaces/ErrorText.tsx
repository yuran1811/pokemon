import { FC, HTMLProps } from "react";

interface ErrorTextProps {
  extraStyle: string;
}

export const ErrorText: FC<ErrorTextProps & HTMLProps<HTMLDivElement>> = ({
  children,
  extraStyle,
}) => (
  <div className={`text-center font-bold text-white ${extraStyle}`}>
    {children}
  </div>
);
