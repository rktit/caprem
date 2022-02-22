import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import infos from '../../assets/file/Infos.png'

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
    <ScrollableAnchor id={'família'}>
      <div className="flex familia w-full pb-24">
        <div className="w-auto md:w-1/2"></div>
        <Fade>
          <div className="flex flex-col w-full md:w-1/2 p-4 md:p-0">
            <div className="flex mt-12 md:mt-24">
              <div className="bg-familia">
                <strong className="font-regular md:font-lg font-red family-medium md:family-regular text-left">
                  Lar e Lazer para toda a família!
                </strong>
              </div>
            </div>
            <div className="family-light font-medium font-blue text-left my-6">
              <br />
              Além de apartamentos criados para te oferecer o essencial para
              <br />
              seu dia-a-dia, o <strong>Morada do Porto</strong> entrega uma área
              de lazer
              <br />
              completa, rica em espaços para atividades em família, o que
              <br />
              potencializa a qualidade de vida que tanto buscamos.
            </div>
            <div className="mt-6">
              <img src={infos} width="480" />
            </div>

            <button
              onClick={() => window.modalModal()}
              className="w-1/2 md:w-2/4 lg:w-3/5 flex justify-center py-3 mt-6 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
            >
              Cadastre-se agora
            </button>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
