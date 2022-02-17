import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import planta from "../../assets/static/planta.jpeg";
import botao53 from "../../assets/static/botao-53.jpeg";
import botao68 from "../../assets/static/botao-68.jpeg";
import esquerda from "../../assets/icon/seta-esquerda.png";
import direita from "../../assets/icon/seta-direita.png";


export default function Page(props) {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);
  return (
    <ScrollableAnchor>
      <div className="flex plantas w-screen bg-black px-6 md:px-0 py-10 md:py-12">
        <Fade>
          <div className="flex flex-col items-center">
            <div className="flex space-x-10 w-48">
              <img src={botao53} />
              <img src={botao68} />
            </div>
            <span className="family-normal font-red text-lg text-right pt-10">
              Planta Apto Tipo II <br />
              Finais 03, 04, 05 e 06</span>
              <img src={esquerda} />
            <img src={planta} className="w-full md:w-4/5 mb-10 items-center" />
            <img src={direita} />


            <span className="font-medium family-light font-gray">
              ATENÇÃO: As medidas estão sujeitas a pequenas variações. Não produza móveis planejados antes da vistoria final.
            </span>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  );
}










