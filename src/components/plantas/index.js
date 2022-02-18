import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import planta from '../../assets/static/planta.png'
import botao53 from '../../assets/static/botao53.png'
import botao68 from '../../assets/static/botao68.png'
import esquerda from '../../assets/icon/seta-esquerda.png'
import direita from '../../assets/icon/seta-direita.png'

export default function Page(props) {
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])
  return (
    <ScrollableAnchor>
      <div className="plantas py-24">
        <div className="bg-plantas uppercase font-red family-bold mt-16">
          Plantas
        </div>

        <div className="flex w-full justify-center mt-8">
          <img src={botao53} className="mr-6" />
          <img src={botao68} className="ml-6" />
        </div>
        <div className="w-full flex justify-center">
          <div className="box-planta w-4/5">
            <div className="medium-italic font-red text-lg text-right planta-info">
              Planta Apto Tipo II <br />
              Finais 03, 04, 05 e 06
            </div>

            <div className="flex w-full justify-center mt-12">
              <img src={planta} />
            </div>

            <div className="family-thin font-black text-center planta-attention mt-24">
              <strong>ATENÇÃO:</strong> As medidas estão sujeitas a pequenas
              variações. Não produza móveis planejados antes da vistoria final.
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
