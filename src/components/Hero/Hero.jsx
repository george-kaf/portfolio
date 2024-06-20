import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am George</h1>
        <p className={styles.description}>Welcome to my portfolio! 🚀 As a front-end developer, 
          I thrive on turning ideas into <span className={styles.highlight}>beautiful</span> and <span className={styles.highlight}>functional</span>  web experiences. 
          Just like guitar playing, <span className={styles.highlight}>attention to detail</span> and a love for pushing boundaries drive my <span className={styles.highlight}>passion</span> for both web development and music.</p>
        {/*<a href="mailto:giorgoskafetzo@gmail.com" className={styles.contactBtn}>Contact me</a>*/}

        <a href="mailto:giorgoskafetzo@gmail.com" className={styles.box}>
          <div className={`${styles.btn} ${styles.btnContact}`}>
            <span>Contact Me</span>
          </div>
        </a>
        
        </div>
        <img src={getImageUrl("hero/note-10.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
  )
}
