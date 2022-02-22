import React from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import descricao from '../../assets/file/descricao.png'
import lar from '../../assets/static/lar-image.png'

export default function Page() {
  return (
    <ScrollableAnchor id={'descrição'}>
      <div className="flex">
        <Fade left duration={2000}>
          <div className="flex w-auto md:w-1/2 mt-4 md:mt-24">
            <div className="w-auto md:w-1/4"></div>
            <div className="w-full md:w-3/4">
              <div>
                <img src={descricao} className="w-auto" />
              </div>

              <div className="items-center">
                <div className="pl-8 md:pl-6 lg:pl-10 mt-8 descricao-text font-blue family-medium">
                  <div>
                    O Morada do Porto possui dois tipos de plantas criadas com o
                    propósito de atender a real necessidade da sua família.
                  </div>
                  <br />

                  <div>
                    São plantas de 53m² e 68 m² que trarão o real necessidade de
                    espaço.
                  </div>
                  <br />

                  <div>
                    <div className="family-bold">
                      Todos os apartamentos possuem:
                    </div>
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

        <div className="w-auto justify-items-center mt-8 md:mt-14">
          <img src={lar} className="descricao-image w-auto md:w-1/2" />
        </div>
      </div>
    </ScrollableAnchor>
  )
}
