import React, { useEffect } from 'react';
import { gsap } from "gsap";

const Basic = () => {

  useEffect(() => {
    gsap.to("#Oval", {
      x: 320,
      duration: 2,
      ease: "bounce"
    });
  }, []);

  return (
    <div>
      <h1>Basic</h1>
      <svg width="274px" height="274px" viewBox="0 0 800 800"  >
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <circle id="Oval" fill="#C74A4A" cx="137" cy="137" r="137"></circle>
        </g>
      </svg>
    </div>
  )
}

export default Basic;
