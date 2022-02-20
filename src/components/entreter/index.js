import React, { useEffect, useRef, useState } from "react"
import ScrollableAnchor from "react-scrollable-anchor"

import { Fade } from "react-reveal"

import quiosque from "../../assets/static/Quiosque.png"
import salão from "../../assets/static/salao.png"
import piscina from "../../assets/static/Piscina.png"
import playground from "../../assets/static/Playground.png"
import quadra from "../../assets/static/Quadra.png"

import logo1 from "../../assets/logo/quiosque.png"
import logo2 from "../../assets/logo/festa.png"
import logo3 from "../../assets/logo/piscina.png"
import logo4 from "../../assets/logo/playground.png"
import logo5 from "../../assets/logo/quadra.png"


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
    <ScrollableAnchor id={"entreternimento"}>
      <div className="flex entreter">
        <Fade>
          <div className="flex flex-wrap md:flex-col mx-12 md:mx-24">

            <div className="entreter-box m-4 mt-20">
              <div className="flex w-10/12 md:w-1/2">
                <img src={quiosque} className="flex w-full pt-4 pr-12" />
              </div>
              <div className="w-4/10 md:w-8/12 entreter-content">
                <div className="flex entreter-title bg-quiosque uppercase font-red font-medium family-bold h-48 pl-20">
                  Quiosques <img src={logo1} className="ml-12 mb-8" />
                </div>
                <div className="entreter-text font-bold font-blue text-justify md:text-left w-10/12">
                  Os quiosques do Morada do Porto, foram pensados<br/> 
                  para que você,
                  sua família e amigos possam criar<br/>
                   momentos inesquecíveis.
                </div>
              </div>
            </div>

            <div className="entreter-box m-4">
              <div className="w/4/10 md:w-8/12 entreter-content">
                <div className="flex entreter-title bg-salao uppercase font-red font-medium family-bold h-48">
                  <img src={logo2} className="p-2 md:p-12 pr-20 mb-8" /> Salão de festas
                </div>
                <div className="entreter-text font-bold font-blue text-justify md:text-right w-10/12">
                  As suas comemorações e reuniões familiares<br/>
                  contam com um espaço especial. Os salão de festa<br/> 
                  do Morada do Porto tem toda estrutura e conforto<br/> 
                  para você confraternizar e eternizar bons<br/>
                  momentos.
                </div>
              </div>
              <div className="flex w-10/12 md:w-1/2">
                <img src={salão} className="flex w-full pt-4" />
              </div>
            </div>

            <div className="entreter-box m-4">
              <div className="flex w-1/2 pt-20">
                <img src={piscina} className="flex w-full pt-4 pr-20" />
              </div>
              <div className="w/4/10 md:w-8/12 entreter-content">
                <div className="flex entreter-title bg-piscina uppercase font-red font-medium family-bold h-48 pl-20">
                  Piscina Infantil<br /> e Adulto{" "}
                  <img src={logo3} className="ml-24 mb-8 mt-8" />
                </div>
                <div className="entreter-text font-bold font-blue text-justify md:text-left w-10/12">
                  As piscinas do Morada, foram pensadas e projetadas<br/> 
                  para atender todos da sua família. São 2 piscinas,<br/> 
                  uma infantil e a outra para os adultos.
                </div>
              </div>
            </div>

            <div className="entreter-box m-4">
              <div className="w/4/10 md:w-8/12 entreter-content">
                <div className="flex entreter-title bg-playground uppercase font-red font-medium family-bold h-48">
                  <img src={logo4} className="p-20 pr-32 mb-8" /> Playground
                </div>
                <div className="entreter-text font-bold font-blue text-justify md:text-right w-10/12">
                  O ambiente perfeito para que os pequenos<br/>
                  exploradores, possam brincar e crescer com a<br/> 
                  melhor qualidade de vida.
                </div>
              </div>
              <div className="flex w-10/12 md:w-1/2">
                <img src={playground} className="flex w-full pt-4" />
              </div>
            </div>

            <div className="entreter-box m-4">
              <div className="flex w-10/12 md:w-1/2">
                <img src={quadra} className="flex w-full pt-4" />
              </div>
              <div className="w/4/10 md:w-8/12 entreter-content">
                <div className="flex entreter-title bg-quadra uppercase font-red font-medium family-bold h-48 pl-20">
                  Quadra <br />Poliesportiva{" "}
                  <img src={logo5} className="ml-16 mb-8 mt-8" /> 
                </div>
                <div className="entreter-text font-bold font-blue text-justify md:text-left w-10/12">
                  Para os apaixonados por esporte, oferecemos na área<br/> 
                  de lazer, duas quadras poliesportivas. Comodidade e<br/>
                  praticidade para cuidar da saúde.
                </div>
              </div>
            </div>
            
            <div className="w-full flex justify-center mt-12 mb-24">
              <button className="w-full md:w-1/3 flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro">
                Cadastre-se agora
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
