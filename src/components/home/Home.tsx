import { FC } from "react";

import { HighlightLink } from "@/components/interfaces";
import { pokeapi } from "@/constants";
import Contact from "./Contact";
import Technologies from "./Technologies";

const Home: FC = () => (
  <div className="w-full text-white">
    <div className="bg-ctbackground py-20 text-center text-6xl font-bold text-indigo-300">
      Welcome to Pokemon Wiki
    </div>

    <div className="flex flex-wrap items-start justify-center">
      <Technologies />
      <Contact />
    </div>

    <p className="flexcentercol my-12 w-full text-4xl">
      This site using <HighlightLink url={pokeapi}>Poke API</HighlightLink>
    </p>
  </div>
);

export default Home;
