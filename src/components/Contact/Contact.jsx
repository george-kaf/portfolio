import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Contact.module.css"

export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul  className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:giorgoskafetzo@gmail.com">giorgoskafetzo@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
            <a href="https://www.linkedin.com/in/george-kafetzopoulos/">linkedin.com/george-kafetzopoulos</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" />
            <a href="https://github.com/george-kaf">github.com/george-kaf</a>
        </li>
    </ul>
  </footer>
}
