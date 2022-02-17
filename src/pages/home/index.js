import React from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {
  Topo,
  Familia,
  Entreter,
  Descrição,
  Fotos,
  Plantas,
  Mapa,
  Rodape,
} from "../../components";

const Home_Page = () => {
  configureAnchors({ offset: -60, scrollDuration: 2000 });

  return (
    <div>
      <Topo />
      <Familia />
      <Entreter />
      <Descrição />
      <Fotos />
      <Plantas />
      <Mapa />
      <Rodape />
    </div>
  );
};

export default Home_Page;
