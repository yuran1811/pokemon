import { FC } from "react";

import { contacts } from "@/constants";

const Contact: FC = () => (
  <div className="flexcentercol w-full p-4 sm:w-[30rem]">
    <div className="bg-ctbackground text-4xl font-semibold text-pink-300">
      Contact
    </div>
    <div className="flexcenter mt-4 w-full text-[2.4rem]">
      {Object.values(contacts).map(({ ico, url }) => (
        <a key={ico + url} href={url} rel="noopener noreferer" target="_blank">
          <span className="iconify m-2 p-2 text-[4.5rem]" data-icon={ico} />
        </a>
      ))}
    </div>
  </div>
);

export default Contact;
