import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import foto1 from '../../assets/static/img1.jpeg'
import foto2 from '../../assets/static/img2.jpeg'
import foto3 from '../../assets/static/img3.jpeg'
import foto4 from '../../assets/static/img4.jpeg'
import foto5 from '../../assets/static/img5.jpeg'


export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    <ScrollableAnchor id={'fotos'}>
      <div className="bg-white w-full mt-32">
        <div className="flex-col px-2 md:px-20">
          <div className="flex">
            <img src={foto1} className="w-3/5 pt-2 px-2" />
            <img src={foto2} className="w-2/5 pt-2 px-2" />
          </div>

          <div className="flex">
            <div className="flex flex-col w-2/5 px-2">
              <img src={foto3} className="w-full h-full pt-2" />
              <img src={foto4} className="w-full h-full pt-2" />
            </div>
            <div className="w-3/5 pt-2 px-2 pt-2">
              <img src={foto5} className="w-full" />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-12 pl-14 md:pl-4 pr-14 md:pr-4">
          <button className="w-full md:w-1/3 flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro">
            Cadastre-se agora
          </button>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
