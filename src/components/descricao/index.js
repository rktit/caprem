import React from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import descricao from '../../assets/file/descricao.png'
import lar from '../../assets/static/lar-image.png'

export default function Page() {
  return (
    <ScrollableAnchor id={''}>
      <div className="flex">
        <Fade left duration={2000}>
          <div className="w-1/2 mt-24 flex">
            <div className="w-1/4"></div>
            <div className="w-3/4">
              <div>
                <img src={descricao} className="w-full" />
              </div>

              <div className="items-center">
                <div className="pl-10 mt-8 descricao-text font-black family-extra-light font-medium">
                  <div>
                    O Morada do Porto possui dois tipos de <br />
                    plantas criadas com o propósito de atender <br />a real
                    necessidade da sua família.
                  </div>
                  <br />

                  <div>
                    São plantas de 53m² e 68 m² que trarão o <br />
                    real necessidade de espaço.
                  </div>
                  <br />

                  <div>
                    <div className='family-bold'>Todos os apartamentos possuem:</div>
                  </div>

                  <div>
                    • Pontos para Ar-condicionado;
                    <br />
                    • Laje Técnica;
                    <br />• Varanda.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div className="w-1/2">
          <img src={lar} className="descricao-image" width="850" />
        </div>
      </div>
    </ScrollableAnchor>
  )
}
