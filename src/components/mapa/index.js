import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

import botão from "../../assets/static/button.jpeg";
import whatsapp from "../../assets/icon/whats.png";


export default function Page(props) {
    const [loading, setLoading] = useState(false);
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth >= 992) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }, [window.innerWidth]);
    return (
        <ScrollableAnchor id={""}>
            <div className="flex flex-center mapa w-auto h-screen">

                <Fade duration={2000}>
                    <div className="pl-44">
                        <div className="w-full md:w-8/12 lg:w-10/12 2xl:w-10/12">
                            <div className="">
                                <strong className="font-lg font-red family-bold italic">O PONTO ESTRATÉGICO DA SUA <br />NOVA VIDA JÁ TEM ENDEREÇO.</strong> <br /><br />

                                <div className="leading-6 family-light font-blue font-normal italic">
                                    Supermercados, parques, farmácias e muita
                                    <br />qualidade de vida, pertinho de você...
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex items-center font-normal">
                            <div className="w-full md:w-8/12 lg:w-10/12 2xl:w-10/12 font-blue">
                                <div><strong>(19) 99952.1441</strong>
                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5519999521441">
                                        <img className="icone_whatsapp mr-1" src={whatsapp} alt="Whatsapp" />
                                    </a>
                                </div>

                                <div><strong>Av. Pe. Oswaldo Vieira de Andrade nº 1330, Terramérica - SP</strong></div>

                            </div>

                        </div>


                        <a target="_blank" href="https://www.caprem.com.br/">
                            <img className="flex w-80 h-8" src={botão} alt="Cadastre-se" />
                        </a>

                        <button
                            onClick={("")}
                            className='transition duration-500 ease-in-out border-2 border-gray2 transform w-1/5 py-2 rounded-3xl family-bold font-gray font-small italic'>Abrir Mapa
                        </button>
                    </div>
                </Fade>
            </div>

        </ScrollableAnchor>
    )
}
