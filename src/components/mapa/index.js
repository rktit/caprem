import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import mapa from '../../assets/static/mapa.jpg'
import whatsapp from '../../assets/icon/whats.png'

export default function Page(props) {
  return (
    <ScrollableAnchor id={'mapa'}>
      <div className="flex">
        <Fade duration={2000}>
          <div className="w-full flex flex-col px-6 md:pl-24 py-4 md:py-12">
            <div className="font-medium font-red family-bold-italic mapa-title">
              O PONTO ESTRATÉGICO DA SUA <br />
              NOVA VIDA JÁ TEM ENDEREÇO.
            </div>

            <div className="family-light-italic font-blue font-normal mapa-desc">
              <br />
              Supermercados, parques, farmácias e muita <br />
              qualidade de vida, pertinho de você...
            </div>

            <div className="pt-12 md:pt-24">
              <div className="family-medium font-blue">
                <div className="flex mapa-phone">
                  (19) 99952.1441
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519999521441"
                  >
                    <div className="ml-4">
                      <img src={whatsapp} alt="Whatsapp" width="42 sm:24" />
                    </div>
                  </a>
                </div>

                <div className="font-normal family-semibold mt-2 mapa-address">
                  Av. Pe. Oswaldo Vieira de Andrade
                  <br />
                  nº 1330, Terramérica - SP
                </div>
              </div>

              <a
                className="noHover"
                target="_blank"
                href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.968249669391!2d-47.348293784995604!3d-22.766559538605932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c899edd4273949%3A0x2879b5155c9defd0!2sResidencial%20Morada%20do%20Porto!5e0!3m2!1sen!2sbr!4v1645568878196!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy'
              >
                <img className="w-5/8 md:w-0" src={mapa} />
              </a>

              <div className="w-full flex justify-start mt-12 pl-6 md:pl-0 pr-8 md:pr-4">
                <button
                  onClick={() => window.modalModal()}
                  className="w-screen md:w-2/4 flex justify-center py-3 px-4 mt-4 md:mt-8 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
                >
                  Cadastre-se agora
                </button>
              </div>
            </div>
          </div>

          <div class="flex w-full py-0 md:py-4 justify-center">
            <a
              className="noHover"
              target="_blank"
              href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.968249669391!2d-47.348293784995604!3d-22.766559538605932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c899edd4273949%3A0x2879b5155c9defd0!2sResidencial%20Morada%20do%20Porto!5e0!3m2!1sen!2sbr!4v1645568878196!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy'
            >
              <img src={mapa} width="100%" />
            </a>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
