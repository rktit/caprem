import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import planta from "../../assets/static/planta.png";
import botao53 from "../../assets/static/botao53.png";
import botao68 from "../../assets/static/botao68.png";
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
      <div className="flex plantas w-screen px-6 py-10">
        <Fade>
          <div className="flex flex-wrap justify-center p-4">

            <div className="flex justify-items-center items-center w-32">
              <div className="bg-plantas uppercase font-red font-lg family-bold">Plantas</div>
            </div>

            <div className="flex w-full">
              <img src={botao53} />
              <img src={botao68} />
            </div>
            
            <img src={esquerda} />
            
            <span className="medium-italic font-red text-lg text-right pt-10">
              Planta Apto Tipo II <br />
              Finais 03, 04, 05 e 06</span>

            <img src={planta} className="w-full md:w-4/5 mb-10 rounded-3xl pt-10" />


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










