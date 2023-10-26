import React, { useEffect } from 'react'
import { gsap } from 'gsap'
const Stagger = () => {

  useEffect(() => {

    gsap.to('#circle', {
      delay: 0.5,
      duration: 1,
      stagger: 0.2, // 一組動畫中，間隔多久開始下一個東西
      y: function (i, elem, boxes) {
        // console.log(i) // 索引
        // console.log(elem) // 當前DOM元素
        // console.log(boxes) // 當前Array
        return i % 2 === 1 ? -50 : 50;
      },
      repeat: -1,
      yoyo: true // 播放完一次後反向播一次
    })

  }, [])

  return (
    <div>
      <h1>Stagger</h1>
      <svg width="960px" height="240px" viewBox="0 0 960 240">
        <g id="shape-page">
          <circle id="circle" fill="#60CCFD" cx="120" cy="120" r="20"></circle>
          <circle id="circle" fill="#FFB966" cx="180" cy="120" r="20"></circle>
          <circle id="circle" fill="#92CF94" cx="240" cy="120" r="20"></circle>
          <circle id="circle" fill="#F089AF" cx="300" cy="120" r="20"></circle>
        </g>
      </svg>
    </div>
  )
}

export default Stagger
