import React from 'react'

import styles from "./About.module.css"
import { getImageUrl } from '../../utils'
 
export const About = () => {
  return ( <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("about/aboutImage2.png")} alt="Me sitting with a laptop" />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Front End Developer</h3>
                    <p>I'm a frontend developer with experience in building responsinve and optimized websites.</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Back End Developer</h3>
                    <p>I have experience in developing rapid and efficient back-end systems, along with robust APIs.</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and user interfaces in websites and apps.</p>
                </div>
                </li>
        </ul>
    </div>
  </section>
  )
}
