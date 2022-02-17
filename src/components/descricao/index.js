import React from "react";
import { Fade } from "react-reveal";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

import lar from "../../assets/file/descricao.png";


export default function Page() {
  return (
    <ScrollableAnchor id={""}>
      <div className="descricao w-auto h-screen">

      <Fade left duration={2000}>
          <div className="w-full md:w-8/12 lg:w-10/12 2xl:w-10/12 pt-6">
            <img src={lar} className="flex w-auto h-24 pt-6 pl-16"/>
          </div>

          <div className="items-center">
          <div className="pl-24 py-10 pt-4 font-black family-thin font-medium">
            <div>O Morada do Porto possui dois tipos de <br />
            plantas criadas com o propósito de atender <br />
            a real necessidade da sua família.</div><br />

            <div>São plantas de 53m² e 68 m² que trarão o <br />
            real necessidade de espaço.</div><br />

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
