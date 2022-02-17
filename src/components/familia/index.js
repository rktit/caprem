import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import Contrate from "../contrate";

import infos from "../../assets/file/Infos.png";
import botão from "../../assets/static/button.jpeg";


import CardIcone from "../cardIcone";

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
    <ScrollableAnchor id={""}>
      <div className="flex familia w-full h-screen flex-end">

        <Fade>
          <div className="flex flex-col grid justify-items-end">

            <div className="flex ">
              <div className="bg-familia">
                <strong className="font-lg font-red font-medium text-left">Lar e Lazer para toda a família!</strong>
              </div>
            </div>
            <div className="family-light font-medium font-blue text-left">
              <br />Além de apartamentos criados para te oferecer o essencial para
              <br />seu dia-a-dia, o <strong>Morada do Porto</strong> entrega uma área de lazer
              <br />completa, rica em espaços para atividades em família, o que
              <br />potencializa a qualidade de vida que tanto buscamos.
              <img className="w-96" src={infos} />
            </div>
            <a target="_blank" href="https://www.caprem.com.br/">
              <img className="flex w-80 h-8" src={botão} alt="Cadastre-se" />
            </a>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  );
}
