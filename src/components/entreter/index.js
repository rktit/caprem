import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import Contrate from "../contrate";

import botão from "../../assets/static/button.jpeg";
import quiosque from "../../assets/static/quiosque.jpeg";
import salão from "../../assets/static/salao.jpeg";
import piscina from "../../assets/static/piscina.jpeg";
import playground from "../../assets/static/playground.jpeg";
import quadra from "../../assets/static/quadra.jpeg";

import logo1 from "../../assets/logo/quiosque.png";
import logo2 from "../../assets/logo/festa.png";
import logo3 from "../../assets/logo/piscina.png";
import logo4 from "../../assets/logo/playground.png";
import logo5 from "../../assets/logo/quadra.png";


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
      <div className="flex entreter w-screen max-h-max p-4">
        <Fade>
          <div className="flex flex-col	">

            <div className="flex justify-end pl-32 pr-12">
              <img src={quiosque} className="flex w-64 h-48 pt-4" />
              <strong className="bg-quiosque uppercase font-red font-medium family-bold">Quiosques</strong>
              <img src={logo1} className="min-h-min min-w-min" />
              <div className="font-blue text-right	"><br />
                Os quiosques do Morada do Porto, foram pensados
                para que você, sua família e amigos possam criar
                momentos inesquecíveis.
              </div>
            </div>

            <div className="flex justify-start">
              <img src={logo2} className="min-h-min min-w-min" />
              <strong className="bg-salao uppercase font-red font-medium family-bold">Salão de Festas</strong>
              <div className="font-blue text-right	"><br />
                As suas comemorações e reuniões familiares
                contam com um espaço especial. Os salão de festa
                do Morada do Porto tem toda estrutura e conforto
                para você confraternizar e eternizar bons
                momentos.
              </div>
              <img src={salão} className="flex w-64 h-48 pt-4" />
            </div>

            <div className="flex justify-end	">
              <img src={piscina} className="flex w-64 h-48 pt-4" />
              <strong className="bg-piscina uppercase font-red font-medium family-bold">Piscina Infantil e Adulto</strong>
              <img src={logo3} className="min-h-min min-w-min" />
              <div className="font-blue text-right	"><br />
                As piscinas do Morada, foram pensadas e projetadas
                para atender todos da sua família. São 2 piscinas,
                uma infantil e a outra para os adultos.
              </div>
            </div>

            <div className="flex justify-start">
              <img src={logo4} className="min-h-min min-w-min" />
              <strong className="bg-playground uppercase font-red font-medium family-bold">Playground</strong>
              <div className="font-blue text-right	"><br />
                O ambiente perfeito para que os pequenos
                exploradores, possam brincar e crescer com a
                melhor qualidade de vida.
              </div>
              <img src={playground} className="flex w-64 h-48 pt-4" />
            </div>

            <div className="flex justify-end	">
              <img src={quadra} className="flex w-64 h-48 pt-4" />
              <strong className="bg-quadra uppercase font-red font-medium family-bold">Quadra Poliesportiva</strong>
              <img src={logo5} className="min-h-min min-w-min" />
              <div className="font-blue text-right	"><br />
                Para os apaixonados por esporte, oferecemos na área
                de lazer, duas quadras poliesportivas. Comodidade e
                praticidade para cuidar da saúde.
              </div>
            </div>

            <a target="_blank" href="https://www.caprem.com.br/">
              <img className="flex w-80 h-8" src={botão} alt="Cadastre-se" />
            </a>          </div>

        </Fade>
      </div>
    </ScrollableAnchor>
  );
}
