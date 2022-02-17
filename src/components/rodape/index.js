import React, { useEffect, useState } from "react";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

import barbo from "../../assets/logo/logo-barbo.png";
import caprem from "../../assets/logo/logo-caprem.png";
import facebook from "../../assets/icon/face.png";
import instagram from "../../assets/icon/insta.png";

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
      <div className="bg-red w-full">

        <div className="flex flex-wrap justify-center p-6 pb-0">

          <div className="flex justify-center items-center my-8">
            <div className="pr-24">
              <img src={barbo} alt="Barbo Epreendimentos" />
            </div>

            <div className="pr-24">
              <img src={caprem} alt="Caprem Construtora" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-center">
            <a className="w-10"
              href="https://www.facebook.com/capremconstrutora/"
              target="_blank"
              rel="noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
            <a className="w-12"
              href="https://www.instagram.com/capremconstrutora/"
              target="_blank"
              rel="noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
            <div className="font-normal family-medium">@capremconstrutora</div>

            <div className="font-medium family-medium tracking-widest self-end mb-14">
              <a href="https://www.caprem.com.br/"
                target="_blank"
                rel="noreferrer">www.caprem.com.br</a>
              
            </div>
          </div>
        </div>
        <div className="family-medium font-normal mt-16 pb-6 text-center">
          Caprem Construtora©2022. Todos os direitos reservados
        </div>
      </div>
    </ScrollableAnchor>
  )
}