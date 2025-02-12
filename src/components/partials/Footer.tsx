import { FC } from "react";

import { ghRepo } from "@/constants";

const Footer: FC = () => (
  <footer className="text-ctcolor bg-ctbackground sticky bottom-0 z-10 w-full py-[1.2rem] text-center text-[2rem] font-semibold tracking-[0.25rem]">
    Made by{" "}
    <a
      className="text-ctcolor bg-ctbackground hover:text-ctbackground hover:bg-ctcolor px-[1rem] py-[0.7rem] transition-all duration-300 ease-in-out"
      href={ghRepo}
      target="_blank"
      rel="noopener noreferrer"
    >
      yuran1811
    </a>
  </footer>
);

export default Footer;
