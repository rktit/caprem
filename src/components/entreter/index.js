import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import botão from '../../assets/static/button.png'
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

import CardIcone from '../cardIcone'

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
    <ScrollableAnchor id={''}>
      <div className="flex entreter p-4">
        <Fade>
          <div className="flex flex-col	px-24">
            <div className="entreter-box">
              <div className="flex w-1/2">
                <img src={quiosque} className="flex w-full pt-4" />
              </div>
              <div className="w-1/2 entreter-content">
                <div className="flex entreter-title bg-quiosque uppercase font-red font-medium family-bold h-48">
                  Quiosques <img src={logo1} className="ml-24" />
                </div>
                <div className="entreter-text font-bold font-blue text-left w-10/12">
                  Os quiosques do Morada do Porto, foram pensados para que você,
                  sua família e amigos possam criar momentos inesquecíveis.
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 entreter-content">
                <div className="flex entreter-title bg-salao uppercase font-red font-medium family-bold h-48">
                  <img src={logo2} className="mr-24" /> Salão de festas
                </div>
                <div className="entreter-text font-bold font-blue text-left w-10/12">
                  As suas comemorações e reuniões familiares contam com um
                  espaço especial. Os salão de festa do Morada do Porto tem toda
                  estrutura e conforto para você confraternizar e eternizar bons
                  momentos.
                </div>
              </div>
              <div className="flex w-1/2">
                <img src={salão} className="flex w-full pt-4" />
              </div>
            </div>
            <div className="flex">
              <div className="flex w-1/2">
                <img src={piscina} className="flex w-full pt-4" />
              </div>
              <div className="w-1/2 entreter-content">
                <div className="flex entreter-title bg-piscina uppercase font-red font-medium family-bold h-48">
                  Piscina Infantil e Adulto{' '}
                  <img src={logo3} className="ml-24" />
                </div>
                <div className="entreter-text font-bold font-blue text-left w-10/12">
                  As piscinas do Morada, foram pensadas e projetadas para
                  atender todos da sua família. São 2 piscinas, uma infantil e a
                  outra para os adultos.
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 entreter-content">
                <div className="flex entreter-title bg-playground uppercase font-red font-medium family-bold h-48">
                  <img src={logo4} className="mr-24" /> Playground
                </div>
                <div className="entreter-text font-bold font-blue text-left w-10/12">
                  O ambiente perfeito para que os pequenos exploradores, possam
                  brincar e crescer com a melhor qualidade de vida.
                </div>
              </div>
              <div className="flex w-1/2">
                <img src={playground} className="flex w-full pt-4" />
              </div>
            </div>
            <div className="flex">
              <div className="flex w-1/2">
                <img src={quadra} className="flex w-full pt-4" />
              </div>
              <div className="w-1/2 entreter-content">
                <div className="flex entreter-title bg-quadra uppercase font-red font-medium family-bold h-64">
                  <img src={logo5} className="mr-24" /> Quadra <br />{' '}
                  Poliesportiva
                </div>
                <div className="entreter-text font-bold font-blue text-left w-10/12">
                  Para os apaixonados por esporte, oferecemos na área de lazer,
                  duas quadras poliesportivas. Comodidade e praticidade para
                  cuidar da saúde.
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-12 mb-24">
              <button className="w-1/3 flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro">
                Cadastre-se agora
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
