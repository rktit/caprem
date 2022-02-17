import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import Contrate from "../contrate";

import foto1 from "../../assets/static/img1.jpeg"
import foto2 from "../../assets/static/img2.jpeg"
import foto3 from "../../assets/static/img3.jpeg"
import foto4 from "../../assets/static/img4.jpeg"
import foto5 from "../../assets/static/img5.jpeg"

import botão from "../../assets/static/button.png";


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
    <ScrollableAnchor id={'fotos'}>
      <div className="bg-white w-full">

        <div className="flex-col p-4 space-x-4 px-32">
          <div className="flex">
            <img src={foto1} className="w-3/5 h-64 pt-2 px-2" />
            <img src={foto2} className="w-2/5 h-64 pt-2 px-2" />
          </div>

          <div className="flex pt-2 px-2">
            <div className="flex flex-col pr-2">
              <img src={foto3} className="flex-auto w-6/6 h-48" />
              <img src={foto4} className="flex-auto w-6/6 h-48 pt-2" />
            </div>
            <img src={foto5} className="flex-auto w-1/2 h-96" />
          </div>
        </div>

        <div>
          <a target="_blank" href="https://www.caprem.com.br/">
            <img className="flex w-80 h-8 " src={botão} alt="Cadastre-se" />
          </a>
        </div>

      </div>
    </ScrollableAnchor>
  );
}
