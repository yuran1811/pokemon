import { FC, HTMLProps } from "react";

import { ctUnderline } from "@/utils";

interface HighlightLinkProps {
  url: string;
}

export const HighlightLink: FC<
  HighlightLinkProps & HTMLProps<HTMLAnchorElement>
> = ({ children, url }) => (
  <a
    className={`text-ctlinkcolor relative font-semibold ${ctUnderline} after:origin-center after:scale-x-0 after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
