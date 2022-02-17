import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import Contrate from "../contrate";

import foto1 from "../../assets/static/img1.jpeg"
import foto2 from "../../assets/static/img2.jpeg"
import foto3 from "../../assets/static/img3.jpeg"
import foto4 from "../../assets/static/img4.jpeg"
import foto5 from "../../assets/static/img5.jpeg"

import botão from "../../assets/static/button.jpeg";


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
        <div className="flex flex-wrap p-4 space-x-4">

          <img src={foto1} className="flex w-64 h-48 pt-4" />


          <img src={foto2} className="flex w-64 h-48 pt-4" />


          <img src={foto3} className="flex w-64 h-48 pt-4" />


          <img src={foto4} className="flex w-64 h-48 pt-4" />


          <img src={foto5} className="flex w-64 h-48 pt-4" />

          <div>
          </div>

          <a target="_blank" href="https://www.caprem.com.br/">
            <img className="flex w-80 h-8" src={botão} alt="Cadastre-se" />
          </a>
        </div>
      </div>
    </ScrollableAnchor>
  );
}
