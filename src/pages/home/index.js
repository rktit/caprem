import React from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {
  // SaibaMais,

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
      {/* <SaibaMais /> */}
 
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
