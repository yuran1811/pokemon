import { FC, HTMLProps } from "react";

export const SearchBar: FC<HTMLProps<HTMLInputElement>> = (props) => (
  <div className="flexcenter w-full">
    <input
      {...props}
      className="bg-ctwhite border-nofill focus:border-ctcolor w-3/5 max-w-120 min-w-80 rounded-4xl border-4 border-solid px-8 py-4 text-3xl outline-hidden transition-all duration-300 ease-in-out"
    />
  </div>
);
