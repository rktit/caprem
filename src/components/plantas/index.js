import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import plantah1 from '../../assets/static/planta-h-1.jpg'
import plantah2 from '../../assets/static/planta-h-2.jpg'
import plantat1 from '../../assets/static/planta-t-1.jpg'
import plantat2 from '../../assets/static/planta-t-2.jpg'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { getAllByTestId } from '@testing-library/react'

export default function Page(props) {
  const [indexSlide, setIndexSlide] = useState(0);
  const focusDiv = useRef();
  const ref = useRef();
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    focusDiv.current.focus();
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  const moveSlide = (value) => {
    ref.current.splide.go(value);
  }
  return (
    <ScrollableAnchor id={'planta'}>
      <div className="plantas pb-12">
        <div className="bg-plantas uppercase font-red family-semibold md:family-bold">
        </div>

        <div className="flex justify-center">
          <div className='col-12' style={{ display: 'flex' }}>
            <div className="w-auto flex mr-2 sm:mr-4 md:mr-6 py-2 px-24 md:px-40 mt-4 button-53" onClick={() => { moveSlide(0) }} tabIndex="0" ref={focusDiv}>Planta 53m³</div>
            <div className="w-auto flex ml-2 sm:ml-4 md:ml-6 py-2 px-24 md:px-40 mt-4 button-68" onClick={() => { moveSlide(2) }} tabIndex="1">Planta 68m³</div>
          </div>
        </div>
        <div className="flex w-full justify-center align-center px-4 md:px-0">
          <div className="w-full md:w-10/12 flex justify-center">
            <div className="box-planta w-4/4 p-2 md:p-8">
              <div className="medium-italic font-red text-lg text-right mt-2 md:mt-0 mr-6 md:mr-0 planta-info">
                Planta Apto Tipo II <br />
                Finais 03, 04, 05 e 06
              </div>

              <div className="flex w-full justify-center align-center">
                <div className="flex w-full md:w-10/12 mt-0 md:mt-8">
                  <Splide
                    ref={ref}
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
