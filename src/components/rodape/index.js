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

          <div className="flex justify-center items-center my-2 md:my-8">
            <div className="pr-2 md:pr-24">
              <img src={barbo} alt="Barbo Epreendimentos" />
            </div>

            <div className="pr-2 md:pr-24">
              <img src={caprem} alt="Caprem Construtora" />
            </div>
          </div>

          <div className="items-center justify-center pt-10 md:pt-16">
            <div className="flex flex-row ">
              <a className="w-8 md:w-10 pl-2 md:pl-0 "
                href="https://www.facebook.com/capremconstrutora/"
                target="_blank"
                rel="noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
              <a className="w-8 md:w-12 pl-2 md:pl-0 "
                href="https://www.instagram.com/capremconstrutora/"
                target="_blank"
                rel="noreferrer">
                <img src={instagram} alt="instagram" />
              </a>

            <div className="font-small md:font-normal family-montmedium  flex	 items-center">@capremconstrutora</div>
            </div>

            <div className="font-medium md:font-regular family-medium tracking-widest self-end ml-2 md:ml-0 mb-8 md:mb-14">
              <a href="https://www.caprem.com.br/"
                target="_blank"
                rel="noreferrer">www.caprem.com.br
              </a>
            </div>
          </div>

        </div>
        <div className="family-light font-xs md:font-normal mt-4 md:mt-10 pb-6 text-center">
          Caprem Construtora©2022. Todos os direitos reservados
        </div>
      </div>
    </ScrollableAnchor>
  )
}