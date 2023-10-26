import React from 'react'
import styles from "./pattern.module.css"

const Pattern = () => {
  return (
    <div>
      <h1>Pattern</h1>
      <svg width="360" height="240">
        <defs>
          <pattern id="rect" patternUnits="userSpaceOnUse" width="60" height="60">
            <rect width="30" height="30" fill="#4af" x="range" y="range"></rect>
          </pattern>
        </defs>
        <rect width="60" height="60" stroke="#a4f" stroke-width="2" fill="none" />
        <rect id="canvas" width="360" height="240" stroke="#aaa" fill="url(#rect)" />
        {/* pattern是for fill用的 */}
      </svg>


      <div className={styles.container}>
        <div className={styles.rect_pattern}></div>
      </div>

      <div className={styles.grid_pattern}></div>


    </div >


  )
}

export default Pattern
