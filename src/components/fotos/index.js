import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import utils from '../../utils'

import foto1 from '../../assets/static/img1.jpeg'
import foto2 from '../../assets/static/img2.jpeg'
import foto3 from '../../assets/static/img3.jpeg'
import foto4 from '../../assets/static/img4.jpeg'
import foto5 from '../../assets/static/img5.jpeg'
import { TextCenter } from 'react-bootstrap-icons'


export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)
  const [isMobile] = useState(utils.mobile());
  const arrayFotos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const renderImg = (value) => {
    return (
      <SplideSlide className="d-flex justify-center items-center" style={{ display:'flex', alignSelf: 'center' }}>
        <img src={value} className="w-auto px-1" />
      </SplideSlide>
    )
  }

  return (
    isMobile ?
<div className='d-flex'>
          <div className='col-12'>
            <Splide
              className="splide-badges col-12"
              options={{
                rewind: true,
                width: 'auto',
                height: '100%',
                gap: '0rem',
                perPage: 1,
                pagination: false,
                arrows: true,
              }}
            >
              {arrayFotos.map(el => { return (renderImg(el)) })}
            </Splide>
          </div>
          <div className="w-full flex justify-center px-14 pb-10">
          <button
            onClick={() => window.modalModal()}
            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
          >
            Cadastre-se agora
          </button>
        </div>
          </div>
          
:
    <ScrollableAnchor id={'fotos'}>
      <div className="w-full">
        <div className="flex-col px-2 md:px-20">
          <div className="flex">
            <img src={foto1} className="w-3/5 pt-2 px-2" />
            <img src={foto2} className="w-2/5 pt-2 px-2" />
          </div>

          <div className="flex">
            <div className="flex flex-col w-2/5 px-2">
              <img src={foto3} className="w-full h-full pt-2" />
              <img src={foto4} className="w-full h-full pt-2" />
            </div>
            <div className="w-3/5 pt-2 px-2 pt-2">
              <img src={foto5} className="w-full" />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pb-6 pt-0 md:pt-12 pl-14 md:pl-4 pr-14 md:pr-4">
          <button
            onClick={() => window.modalModal()}
            className="w-full md:w-1/3 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
          >
            Cadastre-se agora
          </button>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
