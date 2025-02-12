import { FC, HTMLProps } from "react";

interface OverlayProps {
  zIdx: string;
}

export const Overlay: FC<OverlayProps & HTMLProps<HTMLDivElement>> = ({
  zIdx,
  ...otherProps
}) => (
  <div
    className={`${
      zIdx ? zIdx : "z-10"
    } fixed top-0 left-0 h-[100vh] w-[100vw] cursor-pointer bg-slate-900 opacity-80`}
    {...otherProps}
  />
);
