import React, { useEffect } from 'react'
import { gsap } from 'gsap/src'
const Timeline = () => {
  useEffect(() => {
    let tl = gsap.timeline(
      {
        repeat: -1, // infinite
        repeatDelay: 1, //重複之間的delay
        defaults: {
          duration: .66
        }
      })

    tl
      .to('#circle1', {
        x: 320,

      })
      .to('#circle2', {
        x: 320
      })
      .to('#circle3', {
        x: 320
      })
      .to('#circle4', {
        x: 320
      }, '-=0.66') // 比上一個動畫提前.66s結束

  }, [])
  return (
    <div>
      <h1>Timeline</h1>
      <svg width="960px" height="240px" viewBox="0 0 960 240">
        <g id="shape-page">
          <circle id="circle1" fill="#60CCFD" cx="120" cy="120" r="20"></circle>
          <circle id="circle2" fill="#FFB966" cx="180" cy="120" r="20"></circle>
          <circle id="circle3" fill="#92CF94" cx="240" cy="120" r="20"></circle>
          <circle id="circle4" fill="#F089AF" cx="300" cy="120" r="20"></circle>
        </g>
      </svg>
    </div>
  )
}

export default Timeline
