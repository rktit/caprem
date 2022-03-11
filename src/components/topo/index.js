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
      <div className="topo pb-6 md:pb-12 pt-4 md:pt-0">
        <Fade>
          <div className="flex flex-col ml-2 md:ml-24">
            <img
              src={morada}
              className="ml-0 sm:ml-8 md:ml-12 mt-8 sm:mt-0 md:mt-4"
              width="600 sm:300"
            />

            <div className="pb-12 pt-4">
              <div className="family-regular title-topo">
                O Porto Seguro da
                <img src={vida} className="topo-img-vida" />
              </div>
            </div>

            <div className="w-full flex justify-center md:justify-start pl-12 md:pl-0 pr-12 md:pr-40">
              {/* <form action="form-page" method="post"> */}
              {/* <label for="name" className="font-red family-bold ml-2 w-full">
                  Nome:*
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="formulario font-blue family-bold px-4 py-2 mb-3 w-full"
                  placeholder="Digite seu nome"
                />

                <label for="tel" className="font-red family-bold ml-2 w-full">
                  Whatsapp:*
                </label>
                <br />
                <input
                  id="tel"
                  name="user_message"
                  className="formulario font-blue family-bold px-4 py-2 mb-3 w-full"
                  placeholder="(xx)xxxxx-xxxx"
                />
                <br />
                <label for="mail" className="font-red family-bold ml-2 w-full">
                  E-mail:*
                </label>
                <br />
                <input
                  type="email"
                  id="mail"
                  name="user_email"
                  className="formulario font-blue family-bold px-4 py-2 mb-3 w-full"
                  placeholder="Digite seu email"
                /> */}

              <button
                onClick={() => window.modalModal()}
                className="w-full md:w-3/6 flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
              >
                Cadastre-se agora
              </button>
              {/* </form> */}
            </div>
          </div>
        </Fade>

        <div className="fixed right-10 md:right-2 bottom-8 md:bottom-18 whats-message">
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
