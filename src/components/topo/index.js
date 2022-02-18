import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import morada from '../../assets/logo/logo-morada.png'
import vida from '../../assets/file/sua-vida.png'
import botão from '../../assets/static/button.png'
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
      <div className="topo">
        <Fade>
          <div className="flex flex-col ml-24">
            <img src={morada} className=" ml-12" width="500" />

            <div className="">
              <div className="font-red family-regular ml-14 title-topo">
                O Porto Seguro da
                <img src={vida} className="w-84 pb-12 topo-img-vida" />
              </div>
            </div>

            <div className="w-4/12 pl-14 mt-24">
              <form action="form-page" method="post">
                <label for="name" className="font-red family-bold ml-2 w-full">
                  Nome:*
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="formulario font-blue family-bold px-4 py-2 mb-4 w-full"
                  placeholder="Digite seu nome"
                />

                <label for="tel" className="font-red family-bold ml-2 w-full">
                  Whatsapp:*
                </label>
                <br />
                <input
                  id="tel"
                  name="user_message"
                  className="formulario font-blue family-bold px-4 py-2 mb-4 w-full"
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
                  className="formulario font-blue family-bold px-4 py-2 mb-4 w-full"
                  placeholder="Digite seu email"
                />

                <button className=" w-full flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro">
                  Cadastre-se agora
                </button>
              </form>
            </div>
          </div>
        </Fade>

        <div className="fixed right-16 bottom-16 whats-message">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5519999521441"
          >
            <img
              className="flex items-end mr-1 w-24"
              src={whats}
              alt="Whatsapp"
            />
          </a>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
