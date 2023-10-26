import React, { useEffect } from 'react'
import { gsap } from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";

import styles from "./dash.module.css"

const DrawSVGPlugin1 = () => {
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);


    let tl = gsap.timeline({ repeat: -1, yoyo: false })

    tl
      .fromTo(
        '.hi-o',
        { drawSVG: "0%" },
        { duration: .3, drawSVG: "100%", stagger: 0.1 },
      )
      .fromTo(
        '.hi',
        { drawSVG: "0%" },
        { duration: 3, drawSVG: "100%", stagger: 0.2 },
      )
      .fromTo(
        '.threedline',
        { drawSVG: "0%" },
        { duration: 0.8, drawSVG: "100%" },
        "+=0.2"
      )
      .fromTo(
        '.there',
        { drawSVG: "0%" },
        { duration: 2, drawSVG: "100%", stagger: 0.5 }
      )
  }, [])
  return (
    <div className={styles.bloc}>
      <h1 className={styles.h1}>DrawSVGPlugin</h1>
      <svg height="300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 404.7 354" id="hi-there">

        {/* HI */}
        <path className="hi-o" fill="none" stroke="#FFFFFF" strokeWidth="4" d="M324.6,61.2c16.6,0,29.5-12.9,29.5-29.5c0-16.6-12.9-29.5-29.5-29.5c-16.6,0-29.5,12.9-29.5,29.5C295.1,48.4,308,61.2,324.6,61.2z" />
        <path className="hi" fill="none" stroke="#FFFFFF" strokeWidth="4" d="M366.2,204.2c-9.8,0-15-5.6-15-15.1V77.2h-85v28h19.5c9.8,0,8.5,2.1,8.5,11.6v72.4c0,9.5,0.5,15.1-9.3,15.1H277h-20.7c-8.5,0-14.2-4.1-14.2-12.9V52.4c0-8.5,5.7-12.3,14.2-12.3h18.8v-28h-127v28h18.1c8.5,0,9.9,2.1,9.9,8.9v56.1h-75V53.4c0-11.5,8.6-13.3,17-13.3h11v-28H2.2v28h26c8.5,0,12,2.1,12,7.9v142.2c0,8.5-3.6,13.9-12,13.9h-21v33h122v-33h-11c-8.5,0-17-4.1-17-12.2v-57.8h75v58.4c0,9.1-1.4,11.6-9.9,11.6h-18.1v33h122.9h5.9h102.2v-33H366.2z" />

        <path fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" d="M358.8,82.8c11.1-4.2,18.8-14.7,18.8-27.5c0-8.5-3.4-16-8.9-21.3" />
        <path fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" d="M124.2,105.7V77c0-11.5,9.1-13.8,17.5-13.8h10.5V44.7" />
        <polyline fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" points="147.9,40.2 171.2,63.2 175.7,63.2" />
        <line fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" x1="295.1" y1="32.1" x2="275.2" y2="12.2" />
        <path fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" d="M266.2,204.7V75.9c0-8.5,5.2-12.8,13.7-12.8h18.3V44.7" />
        <polyline fill="none" className="threedline" className="threedline" stroke="#FFFFFF" strokeWidth="4" points="265.9,105.2 289.2,129.2 293.7,129.2" />
        <polyline fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" points="374.2,204.7 374.2,94.2 358.8,82.8 351.2,77.2" />
        <polyline fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" points="148.2,237.2 171.2,261.2 294.6,261.2 300.5,261.2 402.2,261.2 402.2,228.2 379.2,204.2" />
        <polyline fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" points="124.2,204.7 124.2,157.2 175.7,157.2" />
        <line fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" x1="147.7" y1="228.2" x2="129.2" y2="204.2" />
        <polyline fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" points="7.2,237.3 30.2,261.2 152.2,261.2 152.2,241.7" />
        <polyline fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" points="1.9,40.2 26,63.2 39.7,63.2" />
        <line fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" x1="129.2" y1="12.2" x2="148.2" y2="33.2" />
        <line fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" x1="303.9" y1="53" x2="328.1" y2="77.2" />
        <line fill="none" className="threedline" stroke="#FFFFFF" strokeWidth="4" x1="345.1" y1="10.5" x2="368.7" y2="34" />

        {/* there */}
        <path className="there" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M76.8,337.3c0,0,1.9,12.2,13.1,12.2c22.1,0,23.8-1.8,59-66.4c-19.7,35.7-36.4,66.2-19.3,66.2c15.2,0,22.9-14.2,28.3-23.7c3.3-0.5,24-3.2,35-25.5c4-8.1,4.1-17.8-8.1-15.2c-5.6,1.2-13.1,14.8-15.7,19.2c-7.6,12.7-22.4,45.2-22.4,45.2s10.3-22.4,21.5-22.4c15.5,0-9.4,22.4,4.7,22.4c4.9,0,11.7-11.4,16.6-20.9c7.5,4.7,19.7,1.7,24.5-8.1c10.1-20.4-14.4-12.8-24.5,8.1c-5.5,11.3-2.2,21.1,11.2,21.1c16.4,0,26.1-28.3,30.5-37.5c9.9,2.5,14,2.5,22.7-1.1c-3.5,5.1-24,38.1-8.3,38.1c6.7,0,11.7-11.4,16.6-20.9c7.5,4.7,19.7,1.7,24.5-8.1c10.1-20.4-14.4-12.8-24.5,8.1c-5.5,11.3-2.2,21.1,11.2,21.1c16.4,0,20.6-4,24.7-10.5" />

        <path className="there" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M157.3,300.8c3.8-2.3-29,0.8-35.6,3.2" />
      </svg>
    </div>
  )
}

export default DrawSVGPlugin1
