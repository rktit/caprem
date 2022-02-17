import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";

import botão from "../../assets/static/button.png";
import quiosque from "../../assets/static/Quiosque.png";
import salão from "../../assets/static/salao.png";
import piscina from "../../assets/static/Piscina.png";
import playground from "../../assets/static/Playground.png";
import quadra from "../../assets/static/Quadra.png";

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
          <div className="flex flex-col	px-24">

            <div className="flex justify-center">
              <img src={quiosque} className="flex w-96 h-60 pt-4" />
              <div className="flex justify-items-center items-center w-10">
                <div className="bg-quiosque uppercase font-red font-medium family-bold">Quiosques</div>
                <img src={logo1} className="w-14" />
              </div>
              <div className="font-blue text-left"><br />
                Os quiosques do Morada do Porto, foram pensados
                para que você, sua família e amigos possam criar
                momentos inesquecíveis.
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex justify-items-center items-center w-10">
                <img src={logo2} className="w-14" />
                <div className="bg-salao uppercase font-red font-medium family-bold">Salão de Festas</div>
              </div>
              <div className="font-blue text-right	"><br />
                As suas comemorações e reuniões familiares
                contam com um espaço especial. Os salão de festa
                do Morada do Porto tem toda estrutura e conforto
                para você confraternizar e eternizar bons
                momentos.
              </div>
              <img src={salão} className="flex w-64 h-48 pt-4" />
            </div>

            <div className="flex justify-center	">
              <img src={piscina} className="flex w-64 h-48 pt-4" />
              <div className="flex justify-items-center items-center w-10">
                <div className="bg-piscina uppercase font-red font-medium family-bold">Piscina Infantil e Adulto</div>
                <img src={logo3} className="w-14" />
              </div>
              <div className="font-blue text-left	"><br />
                As piscinas do Morada, foram pensadas e projetadas
                para atender todos da sua família. São 2 piscinas,
                uma infantil e a outra para os adultos.
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex justify-items-center items-center w-10">
              <img src={logo4} className="w-14" />
                <div className="bg-playground uppercase font-red font-medium family-bold">Playground</div>
              </div>
              <div className="font-blue text-right	"><br />
                O ambiente perfeito para que os pequenos
                exploradores, possam brincar e crescer com a
                melhor qualidade de vida.
              </div>
              <img src={playground} className="flex w-64 h-48 pt-4" />
            </div>

            <div className="flex justify-center	">
              <img src={quadra} className="flex w-64 h-48 pt-4" />
              <div className="flex justify-items-center items-center w-10">
                <div className="bg-quadra uppercase font-red font-medium family-bold">Quadra Poliesportiva</div>
                <img src={logo5} className="w-14" />
              </div>
              <div className="font-blue text-left	"><br />
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
