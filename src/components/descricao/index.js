import React from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import descricao from '../../assets/file/descricao.png'

export default function Page() {
  return (
    <ScrollableAnchor id={'descrição'}>
      <div className="bg-descricao">
        <Fade left>
            <div className="flex flex-col">
              <div>
              <div className="pl-2 md:pl-10 pt-4 md:pt-64">
                <img src={descricao} className="w-auto" />
              </div>

                <div className="descricao-text pl-10 md:pl-24 pt-6 pr-4 md:pr-0">
                  <div>
                    O Morada do Porto possui dois tipos de<br /> 
                    plantas criadas com o propósito de atender<br /> 
                    a real necessidade da sua família.
                  </div>
                  <br />

                  <div>
                    São plantas de 53m² e 68 m² que trarão o<br />
                     real necessidade de
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
                    <br />
                    • Varanda.
                  </div>
                </div>
              </div>
            </div>
        </Fade>

       
      </div>
    </ScrollableAnchor>
  )
}
