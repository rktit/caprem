import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import morada from '../../assets/logo/logo-morada.png'
import vida from '../../assets/file/sua-vida.png'
import whats from '../../assets/icon/whatsapp.png'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

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

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    <ScrollableAnchor id={'home'}>
      <div className="topo h-screen	pb-6 md:pb-12 pt-4 md:pt-0">
        <Fade>
          <div className="flex flex-col ml-2 md:ml-24">
            <img
              src={morada}
              className="flex-auto pt-10 md:pt-0 2xl:pt-10"
              width="600 sm:300 md:450"
            />

            <div className="pb-10 md:pb-4 2xl:pb-16 pt-16 md:pt-10 2xl:pt-10">
              <div className="family-regular title-topo">
                O Porto Seguro da
                <img src={vida} className="topo-img-vida" />
              </div>
            </div>

            <div className="w-full flex-auto justify-center md:justify-start pl-12 md:pl-0 pr-12 md:pr-40">
            
              <button
                onClick={() => window.modalModal()}
                className="w-full md:w-3/6 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
              >
                Cadastre-se agora
              </button>
            </div>
          </div>
        </Fade>

        <div className="fixed right-10 md:right-0 bottom-8 md:bottom-18 whats-message">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5519974139043"
          >
            <img
              className="flex items-start md:items-end mr-2 md:mr-28 w-8 md:w-12"
              src={whats}
              alt="Whatsapp"
            />
          </a>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
