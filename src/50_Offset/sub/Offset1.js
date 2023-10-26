import React from 'react'
import styles from "./offset1.module.css"

const Offset1 = () => {
  return (
    <div>
      <h1>Offset</h1>
      <svg viewBox="0 0 200 100" width="600" height="200">
        <path fill="none" stroke="#4af"
          d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

        <circle class={styles.marker} r="5" fill="#af4"></circle>
      </svg>

      <svg viewBox="0 0 200 100" width="600" height="200">
        <path fill="none" stroke="#4af"
          d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

        <circle r="5" fill="#af4">
          <animateMotion dur="6.6s" repeatCount="indefinite"
            path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
        </circle>
      </svg>
    </div>
  )
}

export default Offset1
