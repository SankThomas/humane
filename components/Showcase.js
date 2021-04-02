import React from "react"
import styles from "../styles/Showcase.module.css"

const Showcase = () => {
  return (
    <>
      <section className={styles.showcase}>
        <div className={styles.overlay}>
          <p className="px-5 lg:text-xl">
            We're creating a catalog of humanitarian acts, and humanity's good
            deeds <br /> to remind people that hope still exists.
          </p>
        </div>
      </section>
    </>
  )
}

export default Showcase
