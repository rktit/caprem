import React from "react";
import { Fade } from "react-reveal";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

import lar from "../../assets/file/descricao.jpeg";


export default function Page() {
  return (
    <ScrollableAnchor id={""}>
      <div className="descricao w-full">

      <Fade left duration={2000}>
          <div className="w-full md:w-8/12 lg:w-10/12 2xl:w-10/12">
            <img src={lar} className="flex w-96 h-16 pt-4"/>
          </div>

          <div className="w-full lg:w-1/2 flex p-6 lg:p-12 items-center">
          <div className="w-full md:w-8/12 lg:w-10/12 2xl:w-10/12 py-10 font-blue">
            <div>O Morada do Porto possui dois tipos de plantas criadas com o propósito de atender a real necessidade da sua família.</div><br />

            <div>São plantas de 53m² e 68 m² que trarão o real necessidade de espaço.</div><br />

            <div><strong>Todos os apartamentos possuem:</strong></div>

            <div>• Pontos para Ar-condicionado;
            <br />
              • Laje Técnica;
              <br />
              • Varanda.</div>
          </div>

        </div>


        </Fade>
      </div>

    </ScrollableAnchor>
  )
}
