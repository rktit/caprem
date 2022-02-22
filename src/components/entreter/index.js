import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import quiosque from '../../assets/static/Quiosque.png'
import salão from '../../assets/static/salao.png'
import piscina from '../../assets/static/Piscina.png'
import playground from '../../assets/static/Playground.png'
import quadra from '../../assets/static/Quadra.png'

import logo1 from '../../assets/logo/quiosque.png'
import logo2 from '../../assets/logo/festa.png'
import logo3 from '../../assets/logo/piscina.png'
import logo4 from '../../assets/logo/playground.png'
import logo5 from '../../assets/logo/quadra.png'

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
    <ScrollableAnchor id={'entreternimento'}>
      <div className="flex entreter">
        <Fade>
          <div className="flex flex-wrap mx-6 md:mx-24 justify-center">
            <div className="entreter-box m-0 md:m-4">
              <div className="flex w-2/12 md:w-1/2">
                <img
                  src={quiosque}
                  className="flex w-3/4 md:w-full pt-4 pr-2 md:pr-12 invisible md:visible"
                />
              </div>
              <div className="w-4/10 md:w-8/12 entreter-content">
                <div className="flex entreter-title bg-quiosque uppercase font-red font-medium family-bold h-30 md:h-48 pl-2 md:pl-20 ">
                  Quiosques <img src={logo1} className="ml-8 md:ml-12 mb-8" />
                </div>
                <div className="entreter-text font-bold font-blue text-left w-5/6 md:w-10/12">
                  Os quiosques do Morada do Porto, foram pensados
                  para que você, sua família e amigos possam criar
                  momentos inesquecíveis.
                </div>
              </div>
            </div>

            <div className="entreter-box m-0 md:m-4">
              <div className="w-4/10 md:w-8/12 entreter-content pt-10 md:pt-0">
                <div className="flex entreter-title bg-salao uppercase font-red font-medium family-bold h-48">
                  <img src={logo2} className="p-0 md:p-20 pr-8 md:pr-32 mb-8" />
                  Salão de festas
                </div>
                <div className="entreter-text font-bold font-blue text-left md:text-right w-5/6 md:w-10/12">
                  As suas comemorações e reuniões familiares
                  contam com um espaço especial. Os salão de festa
                  do Morada do Porto tem toda estrutura e conforto
                  para você confraternizar e eternizar bons
                  momentos.
                </div>
              </div>
              <div className="flex w-2/12 md:w-1/2">
                <img
                  src={salão}
                  className="flex w-3/4 md:w-full pt-4 invisible md:visible"
                />
              </div>
            </div>

            <div className="entreter-box m-0 md:m-4">
              <div className="flex w-2/12 md:w-1/2">
                <img
                  src={piscina}
                  className="flex w-3/4 md:w-full pt-0 md:pt-4 pr-20 invisible md:visible"
                />
              </div>
              <div className="w-4/10 md:w-8/12 entreter-content">
                <div className="flex entreter-title bg-piscina uppercase font-red font-medium family-bold h-30 md:h-48 pl-2 md:pl-20 ">
                  Piscina Infantil
                  <br /> e Adulto{' '}
                  <img src={logo3} className="ml-8 md:ml-24 mb-8 mt-8" />
                </div>
                <div className="entreter-text font-bold font-blue text-left w-5/6 md:w-10/12">
                  As piscinas do Morada, foram pensadas e projetadas
                  para atender todos da sua família. São 2 piscinas,
                  uma infantil e a outra para os adultos.
                </div>
              </div>
            </div>

            <div className="entreter-box m-0 md:m-4">
              <div className="w-4/10 md:w-8/12 entreter-content pt-10 md:pt-0">
                <div className="flex entreter-title bg-playground uppercase font-red font-medium family-bold h-30 md:h-48">
                  <img src={logo4} className="p-0 md:p-20 pr-8 md:pr-32 mb-8" />
                  Playground
                </div>
                <div className="entreter-text font-bold font-blue text-left md:text-right w-5/6 md:w-10/12">
                  O ambiente perfeito para que os pequenos
                  exploradores, possam brincar e crescer com a
                  melhor qualidade de vida.
                </div>
              </div>
              <div className="flex w-2/12 md:w-1/2">
                <img
                  src={playground}
                  className="flex w-3/4 md:w-full pt-4 invisible md:visible"
                />
              </div>
            </div>

            <div className="entreter-box m-0 md:m-4">
              <div className="flex w-2/12 md:w-1/2">
                <img
                  src={quadra}
                  className="flex w-1/4 md:w-full pt-0 md:pt-4 pr-2 md:pr-12 invisible md:visible"
                />
              </div>
              <div className="w-4/10 md:w-8/12 entreter-content">
                <div className="flex entreter-title bg-quadra uppercase font-red font-medium family-bold h-30 md:h-48 pl-2 md:pl-20">
                  Quadra <br />
                  Poliesportiva{' '}
                  <img src={logo5} className="ml-8 md:ml-12 mb-8" />
                </div>
                <div className="entreter-text font-bold font-blue text-left w-5/6 md:w-10/12">
                  Para os apaixonados por esporte, oferecemos na área
                  de lazer, duas quadras poliesportivas. Comodidade e
                  praticidade para cuidar da saúde.
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-12 mb-24 pl-8 md:pl-0 pr-8 md:pr-4">
              <button
                onClick={() => window.modalModal()}
                className="w-full md:w-1/3 flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
              >
                Cadastre-se agora
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
