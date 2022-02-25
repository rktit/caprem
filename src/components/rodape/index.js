import React, { useEffect, useState } from "react";

import barbo from "../../assets/logo/logo-barbo.png";
import caprem from "../../assets/logo/logo-branco.png";
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
      <div className="bg-red w-full">

        <div className="flex flex-col md:flex-row justify-center ml-4 md:ml-52 pl-4 md:pl-52">

          <div className="flex items-center my-2">
            <div className="w-1/2 md:w-96 pl-4 md:pl-6 mr-10 md:mr-16">
              <img src={barbo} alt="Barbo Epreendimentos" />
            </div>

            <div className="w-2/3 md:w-96 pr-8 md:pr-16">
              <img src={caprem} alt="Caprem Construtora" />
            </div>
          </div>

          <div className="m-8 mr-10 md:mr-52 pr-10 md:pr-64 pt-0 md:pt-20">
            <div className="flex flex-row ">
              <a className="w-8 md:w-10 pl-2 md:pl-0 "
                href="https://www.facebook.com/capremconstrutora/"
                target="_blank"
                rel="noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
              <a className="w-8 md:w-12 pl-2 md:pl-0 "
                href="https://www.instagram.com/caprem.construtora/"
                target="_blank"
                rel="noreferrer">
                <img src={instagram} alt="instagram" />
              </a>

            <div className="flex font-small md:font-medium family-montmedium items-center pl-2 md:pl-0">
              @capremconstrutora</div>
            </div>

            <div className="font-medium md:font-regular family-medium tracking-widest ml-2 md:ml-0 mb-0 md:mb-14">
              <a href="https://www.caprem.com.br/"
                target="_blank"
                rel="noreferrer">www.caprem.com.br
              </a>
            </div>
          </div>

        </div>
        <div className="family-light font-small md:font-medium mt-4 md:mt-10 pb-6 text-center">
          Caprem Construtora©2022. Todos os direitos reservados
        </div>
      </div>
  )
}