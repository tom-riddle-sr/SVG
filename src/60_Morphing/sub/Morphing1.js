import React, { useEffect } from 'react';
import styles from './morphing1.module.css';
import { gsap } from "gsap-trial";
import { CustomEase } from "gsap-trial/CustomEase";
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";

const Morphing1 = () => {
  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, CustomEase);


    let tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.3,
      defaults: {
        duration: 3,
      },
    });

    tl
      .to('#star', { morphSVG: '#decagon' }, '+=1')
      .to('#star', { morphSVG: '#rect' }, '+=1')
      .timeScale(3);// 以正常速度ㄉ三倍播放
  }, []);

  return (
    <div>
      <h1>Morphing</h1>
      <svg width="480" height="480" viewBox="0 0 600 600">
        <path
          d="M185,1.12977573 L128.163889,116.292316 L1.07448057,134.759488 L93.0372403,224.401023 L71.3277776,350.976903 L185,291.215879 L298.672222,350.976903 L276.96276,224.401023 L368.925519,134.759488 L241.836111,116.292316 L185,1.12977573 Z"
          id="star"
          fill="#4af"
        ></path>
        <path
          d="M160,0 L258.885438,32 L320,110.557281 L320,210.424346 L258.885438,289.442719 C217.122754,309.81424 184.160941,320 160,320 C135.839059,320 102.877246,309.81424 61.1145618,289.442719 L0,210.424346 L0,110.557281 L61.1145618,32 L160,0 Z"
          id="decagon"
          fill="none"
        ></path>
        <rect id="rect" x="0.5" y="0.5" width="319" height="319" fill="none"></rect>
      </svg>
    </div>
  );
};

export default Morphing1;
