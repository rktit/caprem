import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import mapa from '../../assets/static/mapa.jpg'
import whatsapp from '../../assets/icon/whats.png'

export default function Page(props) {
  const [loading, setLoading] = useState(false)
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])
  return (
    <ScrollableAnchor id={''}>
      <div className="flex">
        <Fade duration={2000}>
          <div className="w-1/2 flex flex-col pl-24 py-12">
            <div className="font-medium font-red family-bold-italic mapa-title">
              O PONTO ESTRATÉGICO DA SUA <br />
              NOVA VIDA JÁ TEM ENDEREÇO.
            </div>

            <div className="family-light-italic font-blue font-normal mapa-desc">
              Supermercados, parques, farmácias e muita
              <br />
              qualidade de vida, pertinho de você...
            </div>

            <div className="pt-14">
              <div className="family-medium font-blue">
                <div className="flex mapa-phone">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519999521441"
                  >
                    (19) 99952.1441
                  </a>
                  <div className="ml-4">
                    <img src={whatsapp} alt="Whatsapp" width="42" />
                  </div>
                </div>

                <div className="font-normal family-semibold mt-4 mapa-address">
                  Av. Pe. Oswaldo Vieira de Andrade
                  <br />
                  nº 1330, Terramérica - SP
                </div>
              </div>

              <button className=" w-2/3 flex justify-center py-3 px-4 mt-8 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro">
                Cadastre-se agora
              </button>
            </div>
          </div>

          <div class="flex w-1/2 justify-center">
            <img src={mapa} />
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
