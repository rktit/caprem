import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";


import morada from "../../assets/logo/logo-morada.png";
import vida from "../../assets/file/sua-vida.png";
import botão from "../../assets/static/button.jpeg";
import whats from "../../assets/icon/whatsapp.png";

export default function Page(props) {
  const btnScrollTop = useRef(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);

  return (
    <ScrollableAnchor id={"home"}>
      <div className="topo w-screen h-screen">

        <Fade>
          <div className="flex flex-col ml-24">
            <img src={morada} className="w-80 ml-12" />

            <div className="">
              <div className="font-red family-medium font-lg ml-14">
                O Porto Seguro da
              </div>
              <div className=" mb-10 ml-40">
                <img src={vida} className="w-52 pb-12" />
              </div>
            </div>

            <div className="flex pl-14">
              <form action="form-page" method="post">

                <label for="name" className="font-red family-bold ml-2">Nome:*
                </label><br />
                <input type="text" id="name" name="user_name" className="formulario font-blue family-bold px-4 py-2 mb-2 w-4/5 justify-between" placeholder="Digite seu nome"></input>

                <label for="tel" className="font-red family-bold ml-2">Whatsapp:*
                </label><br />
                <input id="tel" name="user_message" className="formulario font-blue family-bold px-4 py-2 mb-2 w-4/5 justify-between" placeholder="(xx)xxxxx-xxxx"></input>
                <br />
                <label for="mail" className="font-red family-bold ml-2">E-mail:*
                </label><br />
                <input type="email" id="mail" name="user_email" className="formulario font-blue family-bold px-4 py-2 w-4/5 justify-between" placeholder="Digite seu email"></input>

                <a target="_blank" href="https://www.caprem.com.br/">
                  <img className="flex w-80 h-8 h-16 py-2 w-4/5 mt-2" src={botão} alt="Cadastre-se" />
                </a>
              </form>
            </div>

          </div>
        </Fade>


        <a target="_blank" href="https://api.whatsapp.com/send?phone=5519999521441">
          <img className="flex absolute right-52 bottom-4 items-end mr-1 w-14" src={whats} alt="Whatsapp" />
        </a>


      </div>
    </ScrollableAnchor>
  );
}
