
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import styles from "./blink.module.css"

const Blink1 = () => {
  useEffect(() => {

    gsap
      .to('#line1', {
        fill: '#235fa7',
        repeat: -1,
        yoyo: true,
        duration: 0.25,
        repeatDelay: 0
      })
    gsap
      .to('#line1', {
        fill: '#4fd2dd',
        repeat: -1,
        yoyo: true,
        duration: 0.25,
        repeatDelay: 0.25
      });

    gsap
      .to('#line2', {
        fill: '#4fd2dd',
        repeat: -1,
        yoyo: true,
        duration: 0.3,
        repeatDelay: 0
      })


    gsap
      .to('#line3', {
        fill: 'transparent',
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        repeatDelay: 0
      })
    gsap
      .to('#line3', {
        fill: '#235fa7',
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        repeatDelay: 0.3
      });

  }, [])
  return (
    <div className={styles.gs_border_blink}>
      <h1 className={styles.h1}>Blink</h1>
      <svg viewBox="0 0 320 180">
        <defs>
          <g id="blink-border">
            <polygon
              id="line1"
              fill="#4fd2dd"
              points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
            >
            </polygon>
            <polygon
              id="line2"
              fill="#235fa7"
              points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
            >
            </polygon>
            <polygon
              id="line3"
              fill="#4fd2dd"
              points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
            >
            </polygon>
          </g>
        </defs>
      </svg>

      {/* <use>用在插入同個<svg>到不同ㄉ地方 */}

      <svg className={styles.left_top} >
        <use xlinkHref="#blink-border" />
      </svg >
      <svg className={styles.right_top} >
        <use xlinkHref="#blink-border" />
      </svg >
      <svg className={styles.left_bottom}>
        <use xlinkHref="#blink-border" />
      </svg >
      <svg className={styles.right_bottom}>
        <use xlinkHref="#blink-border" />
      </svg >
    </div >
  )
}

export default Blink1
