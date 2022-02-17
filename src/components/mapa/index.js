import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

import botão from "../../assets/static/button.png";
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
            <div className="flex mapa w-full">

                <Fade duration={2000}>
                    <div className="flex flex-col pl-44 py-8">
                        <div className="font-medium font-red family-bold-italic">
                            O PONTO ESTRATÉGICO DA SUA <br />NOVA VIDA JÁ TEM ENDEREÇO.
                        </div>

                        <div className="family-light-italic font-blue font-normal">
                            Supermercados, parques, farmácias e muita
                            <br />qualidade de vida, pertinho de você...
                        </div>

                        <div className="pt-14">
                            <div className="family-medium font-blue">
                                <div>
                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5519999521441">(19) 99952.1441
                                        <img className="w-6" src={whatsapp} alt="Whatsapp" />
                                    </a>
                                </div>

                                <div className="font-normal family-semibold">
                                    Av. Pe. Oswaldo Vieira de Andrade
                                    <br />nº 1330, Terramérica - SP
                                </div>
                            </div>

                            <a target="_blank" href="https://www.caprem.com.br/">
                                <img className="flex w-80 h-8" src={botão} alt="Cadastre-se" />
                            </a>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <button
                            onClick={("")}
                            className=" transition duration-500 ease-in-out border-2 border-gray2 transform w-32 h-8 rounded-3xl family-bold-italic font-gray font-small">Abrir Mapa
                        </button>
                    </div>
                </Fade>
            </div>
        </ScrollableAnchor>
    )
}
