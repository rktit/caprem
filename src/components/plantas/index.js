import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import plantah1 from '../../assets/static/planta-h-1.jpg'
import plantah2 from '../../assets/static/planta-h-2.jpg'
import plantat1 from '../../assets/static/planta-t-1.jpg'
import plantat2 from '../../assets/static/planta-t-2.jpg'

import botao53 from '../../assets/static/botao53.png'
import botao68 from '../../assets/static/botao68.png'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'

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
    <ScrollableAnchor id={'planta'}>
      <div className="plantas pt-12 pb-12">
        <div className="bg-plantas uppercase font-red family-semibold md:family-bold mt-8 md:mt-32">
          Plantas
        </div>

        <div className="flex px-16 md:px-0 w-auto md:w-5/7 lg:full justify-center mt-8">
          <img
            src={botao53}
            className="sm:ml-4 md:ml-12 lg:ml-10 sm:mr-2 md:mr-6 lg:mr-8"
          />
          <img src={botao68} className="mr-2 md:mr-8 ml-2 md:ml-6" />
        </div>
        <div className="flex w-full justify-center align-center">
          <div className="w-full md:w-10/12 flex justify-center">
            <div className="box-planta w-4/4 p-2 md:p-8">
              <div className="medium-italic font-red text-lg text-right mt-2 md:mt-0 mr-6 md:mr-0 planta-info">
                Planta Apto Tipo II <br />
                Finais 03, 04, 05 e 06
              </div>

              <div className="flex w-full justify-center align-center">
                <div className="flex w-full md:w-10/12 mt-0 md:mt-8">
                  <Splide
                    className="splide-badges col-12"
                    options={{
                      rewind: true,
                      width: '100%',
                      gap: '0rem',
                      perPage: 1,
                      pagination: isMobile,
                      arrows: !isMobile,
                    }}
                  >
                    <SplideSlide className="splideIcon">
                      <img src={plantah1} />
                    </SplideSlide>
                    <SplideSlide className="splideIcon">
                      <img src={plantat1} />
                    </SplideSlide>
                    <SplideSlide className="splideIcon">
                      <img src={plantah2} />
                    </SplideSlide>
                    <SplideSlide className="splideIcon">
                      <img src={plantat2} />
                    </SplideSlide>
                  </Splide>
                </div>
              </div>

              <div className="family-thin font-black text-center planta-attention mt-10 md:mt-12">
                <strong>ATENÇÃO:</strong> As medidas estão sujeitas a pequenas
                variações. Não produza móveis planejados antes da vistoria
                final.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
