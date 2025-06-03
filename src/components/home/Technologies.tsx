import { FC } from "react";

import { technologies } from "@/constants";

const Technologies: FC = () => (
  <div className="flexcentercol w-full p-4 sm:w-[30rem]">
    <div className="bg-ctbackground text-4xl font-semibold text-pink-300">
      Technologies
    </div>
    <div className="flexcentercol mt-4 w-full text-[2.4rem]">
      <ul className="w-4/5 list-disc *:h-20">
        {technologies.map(({ name, ico, size }) => (
          <li
            key={name + ico}
            className="flex w-full items-center justify-center"
          >
            <span className={`iconify px-4 text-[${size}]`} data-icon={ico} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Technologies;
